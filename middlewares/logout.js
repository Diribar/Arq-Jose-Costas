module.exports = (req, res, next) => {
	req.session.codigo = null;
	next();
};
