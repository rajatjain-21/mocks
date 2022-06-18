const jsonServer = require("json-server");
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const router = jsonServer.router("db.json");
const PORT = process.env.PORT || 5000;

server.use(middlewares);
server.use(router);

server.listen(PORT)