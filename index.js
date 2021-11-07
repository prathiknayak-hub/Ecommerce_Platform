// importing the modules
const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();

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

const PORT = process.env.PORT || 5000;

app.listen(PORT,console.log(`Server started on port ${PORT}`));