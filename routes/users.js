var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:usrname', function(req, res, next) {
	console.log('req.params.usrname',req.params.usrname)
	res.send('respond with a resource');
});

module.exports = router;
