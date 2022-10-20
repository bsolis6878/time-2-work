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

// renders employee page
router.get('/employee', (req, res) => {
    res.render('employee');
});

// renders entrepreneur page
router.get('/entrepreneur', (req, res) => {
    res.render('entrepreneur');
});

// renders team lead page
router.get('/team-lead', (res, res) => {
    res.render('team-lead')
});

module.exports = router;