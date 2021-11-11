// importing the modules
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');

const app = express();

app.use( express.static(path.join( __dirname,"view" ) ));

// EJS
app.use(expressLayouts);
app.set('views','./view');
app.set('view engine','ejs');

// Bodyparser
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// Routes
app.use('/',require('./router/user_login'));
app.use('/register',require('./router/user_register'));
app.use('/dashboard',require('./router/dashboard'));

const PORT = process.env.PORT || 5000;

app.listen(PORT,console.log(`Server started on port ${PORT}`));