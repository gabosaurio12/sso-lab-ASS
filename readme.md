## Config server

1. Create HTTPS certificates (if necessary)

```
cd web-bff/ssl/
openssl req -x509 -nodes -days 365 \
  -newkey rsa:2048 \
  -keyout server.key \
  -out server.crt \
  -subj "/CN=10.211.55.9" \
  -addext "subjectAltName = IP:<ip-server>"
```
