/*
 * Some test
 */

exports.json = function(req, res) {
	var user = {"name":"Chen","age":24};
	res.json(user);
};