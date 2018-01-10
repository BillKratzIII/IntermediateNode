const expressPromiseRouter = require('express-promise-router');
const router = expressPromiseRouter(); 
const Promise = require('bluebird');
const customErrors = require('../custom-errors');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Student Manager Application' });
});

router.get('/login', function(req, res, next) {
  res.render('admin/login');
});

router.post('/login', (req, res) => {
  return Promise.try(() => {
    if (req.body.password === "secret") {
      res.redirect('/students');
    } else {
      throw new customErrors.AuthenticationError("Incorrect Password");
    }
  });
});

module.exports = router;
