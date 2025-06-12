const express = require("express");
const session = require("express-session");
require('./auth/google')
const passport = require("passport");


const app = express();
const PORT = 3000;

//Session setup

app.use(session({
    secret: 'mysecret',
    resave: false,
    saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());

app.get('/',(req, res) =>{
    res.send("<a href='/auth/google'>Login with Google</a>");
});

app.get('/auth/google',
  passport.authenticate(
    'google',
     { 
        scope: ['profile', 'email']
     }
    ));
 
app.get('/auth/google/callback', 
  passport.authenticate(
    'google',
     { 
        failureRedirect: '/',
        successRedirect: '/profile'
     }
    ),
//   function(req, res) {
//     // Successful authentication, redirect home.
//     res.redirect('/');
//   }
);

function authCheck(req, res, next){
    if(req.isAuthenticated()){
        return next;
    }
    res.redirect('/');
}

app.get('/profile', authCheck,(req,res)=>{
    
    res.send(`
            <h1>Welcome ${req.user.displayName}</h1>
            <a href='/logout'>Logout</a>
            `); 
    
})

app.get("/logout", (req, res) =>{
    req.logout(()=>{
        res.redirect("/");
    });
});

app.listen(PORT,()=>{
    console.log(`server is listening at ${PORT}`);
});