const express = require('express');
const router  = express.Router();
const auth    = require('../controllers/auth');

router.route('/login')
  .post(auth.login);

router.route('/register')
  .post(auth.register);

router.route('/users/:id')
  .get(auth.show)
  .put(auth.update);
  
module.exports = router;
