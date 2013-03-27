/*
 * GET home page.
 */

exports.index = function(req, res) {
	res.render('index', {
		title: '我的博客',
		welcome:"欢迎您！"
	});
};