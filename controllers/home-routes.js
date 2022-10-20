const router = require('express').Router();

// render homepage
router.get('/', (req, res) => {
    res.render('homepage');
});

// renders signup page
router.get('/signup', (req, res) => {
    res.render('signup');
});

// renders login page
router.get('/login', (req, res) => {
    res.render('login');
});
// renders create page
router.get('/create', (req, res) => {
    res.render('create');
});
// renders employee page
router.get('/employee', (req, res) => {
    res.render('employee');
});

// renders entrepreneur page
router.get('/entrepreneur', (req, res) => {
    res.render('entrepreneur');
});

// renders team lead page
router.get('/team-lead', (req, res) => {
    res.render('team-lead')
});

module.exports = router;