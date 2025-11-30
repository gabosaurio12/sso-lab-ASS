import express from "express";
import axios from "axios";
import crypto from "crypto";
import qs from "qs";

const app = express();
const PORT = 3000;

const KEYCLOAK_URL = "https://10.211.55.9:8080";
const REALM = "master";
const CLIENT_ID = "web-app";

// 1. /login redirige a Keycloak
app.get("/login", (req, res) => {
  const codeVerifier = crypto.randomBytes(32).toString("hex");
  const codeChallenge = crypto
    .createHash("sha256")
    .update(codeVerifier)
    .digest("base64url");

  req.session = { codeVerifier };

  const redirectUrl = `${KEYCLOAK_URL}/realms/${REALM}/protocol/openid-connect/auth?` +
    qs.stringify({
      client_id: CLIENT_ID,
      response_type: "code",
      redirect_uri: `https://10.211.55.9:3000/callback`,
      code_challenge: codeChallenge,
      code_challenge_method: "S256",
    });

  res.redirect(redirectUrl);
});

// 2. /callback intercambia el code por tokens
app.get("/callback", async (req, res) => {
  const { code } = req.query;

  const token_res = await axios.post(
    `${KEYCLOAK_URL}/realms/${REALM}/protocol/openid-connect/token`,
    qs.stringify({
     grant_type: "authorization_code",
      client_id: CLIENT_ID,
      code,
      redirect_uri: `https://10.211.55.9:3000/callback`,
      code_verifier: req.session.codeVerifier,
    })
  );

  res.json(token_res.data);
});

app.listen(PORT, () => console.log("BFF on *:" + PORT));
