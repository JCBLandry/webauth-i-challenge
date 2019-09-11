const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const session = require('express-session');
const connectSessionKnex = require('connect-session-knex')

const authRouter = require('./auth/auth-router.js');
const usersRouter = require('./users/users_router.js');
const db = require('./database/dbConfig.js')

const server = express();

const KnexSessionStore = connectSessionKnex(session);

const sessionConfig = {
  name: 'webauthchal',
  //this should not be hard coded in
  secret: 'charizard is cool but overrated',
  cookie: {
    maxAge: 1000 * 60 * 60,
    secure: false,
    httpOnly: true, //the browser cant access via js

  },
  resave: false,
  saveUninitialized: false,
  // where to store?
  store: new KnexSessionStore({
    knex: db,
    tablename: 'sessions',
    sidfieldname: 'sid',
    createtable: true,
    clearInterval: 1000 * 60 *60
  })
}

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(session(sessionConfig));

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);

server.get('/', (req, res) => {
  res.json({ api: 'up' });
});

module.exports = server;