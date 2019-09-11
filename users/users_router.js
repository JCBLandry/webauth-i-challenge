const router = require('express').Router();

const Users = require('./users_model.js');
const restricted = require('../auth/middleware.js');

router.get('/', restricted, (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

module.exports = router;
