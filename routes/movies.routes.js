const router = require("express").Router();
// all your routes here

//Read all celebrities form DB

router.get('/', (req, res) => res.render('movies/movies'));

// Show a form to create a movie
const Celebrity = require("../models/Celebrity.model");

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
            res.redirect('movies/movies')
    })
        .catch((err) => {
            res.render('movies/new-movie')
    })
        })

module.exports = router;