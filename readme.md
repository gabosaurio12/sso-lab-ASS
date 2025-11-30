== Config server

1. Crear certificados https (si es necesario)

```
cd web-bff/ssl/
openssl genrsa -out server.key 2048
openssl req -new -x509 -key server.key -out server.crt -days 365 -subj "/CN=<ip-server>"

```
