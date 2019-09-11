const bcrypt = require('bcryptjs');

const Users = require('../users/users_model.js');


module.exports = (req, res, next) => {

  if (req.session && req.session.user){
    next();
  } else {
    res.status(401).json({message: 'invalid creds'});
  }
};