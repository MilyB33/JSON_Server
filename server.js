const jsonServer = require('json-server');
const auth = require('json-server-auth');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults({ noCors: true });
const port = process.env.PORT || 3001;

server.db = router.db;

server.use(middlewares);
server.use(auth);
server.use(router);

server.listen(port);
