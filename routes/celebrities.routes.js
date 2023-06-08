const router = require("express").Router();
// all your routes here
const Celebrity = require ("../models/Celebrity.model");

// get route to create celebrity 
router.get('/create', (req, res) => res.render('celebrities/new-celebrity'));

//POST route to submit the form
router.post('/create', (req, res) => {
    const { name, occupation, catchPhrase } = req.body;
    console.log("req.body", req.body);
    Celebrity.create({
        name, 
        occupation, 
        catchPhrase
    })
        .then(() => {
            res.redirect('/celebrities')
    })
        .catch((err) => {
            res.render('celebrities/new-celebrity')
    })
        })

//GET route to display a list of all the celebrities.
router.get('/celebrities', (req, res) => {
    Celebrity.find()
    .then((celebritiesFromDB) => res.render("celebrities", { celebrities: celebritiesFromDB }))
    .catch((err) => console.log(`Error while getting celebrities from the DB: ${err}`));
});

module.exports = router;