module.exports = (req, res, next) => {
	if (!req.session.codigo) {
		return res.redirect("/");
	}
	next();
};
