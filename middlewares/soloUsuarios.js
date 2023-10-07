module.exports = (req, res, next) => {
	// Redirecciona
	if (!req.cookies.aceptado) return res.redirect("/");

	// Fin
	next();
};
