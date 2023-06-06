const router = require("express").Router();
// all your routes here
router.get('/movies', (req, res) => res.render('movies/movies.hbs'));

module.exports = router;