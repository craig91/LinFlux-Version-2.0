var express = require('express');
var Session = require('express-session');
var pgSession = require('connect-pg-simple')(Session);
var passport = require('./passport-config/passport');
var path = require('path');
var bodyparser = require('body-parser');
const db = require('./models');


var app = express();
var router = require('./routes/index.js')
var env    = process.env.NODE_ENV || 'development';
var config = require('./config/config.json')[env];

app.use(bodyparser.urlencoded({ extended: false }));

// Session //
app.use(Session({
  store: new pgSession({
    conString: 'pg://' + config.username + ':' + config.password + '@' + config.host + '/' + config.database,
    db: db.sequelize,
      table: 'Session'
  }),
  secret: 'CAT_PLAYING_PIANO',
  resave: true,
  saveUninitialized: true,
  cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 }, // 30 days
}));


app.use(passport.initialize());
app.use(passport.session());


app.use(express.static('./public'));
app.use('/api',router)


app.get('/*', (req, res) =>{

console.log('USER ======>>>>>>', req.user);
  console.log('isAuthenticated ======>>>>>>', req.isAuthenticated());
  res.sendFile(path.join(__dirname, './public/index.html'))
})





app.listen(3000, function() {
  console.log('server started on port 3000')
});
