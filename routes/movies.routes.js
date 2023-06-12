//Read all celebrities form DB
const Celebrity = require("../models/Celebrity.model");

const Movie = require("../models/movie.model");

const router = require("express").Router();
// all your routes here


router.get('/', (req, res) => res.render('movies/movies'));

router.get('/create', (req, res) => {
    Celebrity.find()
    .then((celebritiesFromDB) => res.render("movies/new-movie", { celebrities: celebritiesFromDB }))
    .catch((err) => console.log(`Error while getting celebrities from the DB: ${err}`));
});

//Send the data from the form to this route to create the movie and save it to the database
router.post('/create', (req, res) => {
    const { title, genre, plot, cast } = req.body;
    console.log("req.body", req.body);
    Movie.create({
        title, 
        genre, 
        plot,
        cast
    })
        .then(() => {
            console.log("movies added")
            res.redirect('/movies')
    })
        .catch((err) => {
            res.render('movies/new-movie')
    })
        })

//GET route to display a list of all the celebrities.
router.get('/', (req, res) => {
    Movie.find()
    .then((moviesFromDB) => res.render("movies/movies", { movies: moviesFromDB }))
    .catch((err) => console.log(`Error while getting celebrities from the DB: ${err}`));
});


module.exports = router;