const withAuth = (req, res, next) => {
    //redirect to login page is user is not logged in
    if (!req.session.logged_in) {
        res.redirect('/login');
    } else {
        //if user is authenticated then call next
        next();
    }
};

module.exports = withAuth;