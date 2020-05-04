var router = require('koa-router')();

router.prefix('/users');

router.get('/', function *(next) {
  this.body = 'this is a users response!';
});

router.get('/bar', function *(next) {
  this.body = 'this is a users/bar response!';
});

router.get('/user', function *(next) {
  this.body = 'this is a user!';
});


module.exports = router;
