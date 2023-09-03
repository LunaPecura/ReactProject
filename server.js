const express = require('express');
const app = express();
const PORT = 3000;

require('dotenv').config();
const mongoose = require('mongoose');
// const Data = require('./models/data.js');
const User = require('./models/user.js');
const methodOverride = require('method-override')


// Middleware
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));


// Connect to Mongoose
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => { console.log("Connected to mongo"); });


// Mount route(s)
app.get('/', (req, res) => {
	res.send('<h1>Hello World!</h1>');
});

// Obligatory 'Listening on…'
app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});