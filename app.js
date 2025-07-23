const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const config = require('./modules/config');
const routes = require('./routes/routes');

const app = express();

// Handlebars setup
app.engine('handlebars', exphbs.engine({
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, 'views/layouts'),
  partialsDir: path.join(__dirname, 'views/partials')
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/', routes);

// Start server
app.listen(config.port, () => {
  console.log(`${config.appName} running at http://localhost:${config.port}`);
});

