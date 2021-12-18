// importing the modules
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const cookieParser=require("cookie-parser");
const app = express();

app.use( express.static(path.join( __dirname,"view" ) ));

// EJS
app.use(expressLayouts);
app.set('views','./view');
app.set('view engine','ejs');

const login= require('./router/user_login')
const register=require('./router/user_register')
const dashboard=require('./router/dashboard')

// Bodyparser
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
// Routes
app.use('/',login);
app.use('/register',register);
app.use('/dashboard',dashboard);



const PORT = process.env.PORT || 5000;

app.listen(PORT,console.log(`Server started on port ${PORT}`));