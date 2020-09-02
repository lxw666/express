var express = require('express');
var router = express.Router();
var commonBar = [{
		className: 'active',
		href: '/',
		text: '首页'
	}, {
		className: '',
		href: '/login',
		text: '登入'
	}, {
		className: '',
		href: '/reg',
		text: '注册'
	}];

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log(req.baseUrl)
	res.render('index', {
		title: 'Express',
		commonBar: commonBar,
	});
});
router.get('/green', function(req, res, next) {
	console.log(req.baseUrl)
	res.send('green page');
});

module.exports = router;
