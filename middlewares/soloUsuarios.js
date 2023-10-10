module.exports = (req, res, next) => {
	// Redirecciona
	if (!req.cookies.aceptado) return res.redirect("/login");

	// Fin
	next();
};
