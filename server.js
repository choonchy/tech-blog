const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const helpers = require('./utils/helpers');
const hbs = exphbs.create({ helpers });

require('dotenv').config();
const app = express();
const PORT = process.env.PORT;
const routes = require('./controllers');

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

app.listen(PORT, () => {
	console.log('Server is active on address http://localhost:' + PORT);
});
