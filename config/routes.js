const express = require('express');
const router  = express.Router();
const auth    = require('../controllers/auth');
const event   = require('../controllers/event');
const secureRoute = require('../lib/secureRoute');

router.route('/login')
  .post(auth.login);

router.route('/register')
  .post(auth.register);

router.route('/users/:id')
  .get(auth.show)
  .put(auth.update);

router.route('/events')
  .post(event.create);

router.route('/events/:id')
  .get(event.show)
  .put(event.update)
  .delete(event.delete);

router.route('/events/:id/comments')
  .post(event.addComment);

router.route('/events/:id/comments/:commentId')
  .delete(event.deleteComment);

router.route('/events/:id/items')
  .post(event.addItem);

router.route('/events/:id/items/:itemId')
  .delete(event.deleteItem);


module.exports = router;
