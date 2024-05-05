const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routes = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');

dotenv.config()

const app = express();
const port = process.env.PORT || 3001;
const db = mongoose.connection;

app.use(cors());

//connect db
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true }).then(() => console.log('DB Connected!'));
db.on('error', (err) => {
    console.log('DB connection error:', err.message);
})

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

routes(app)

app.listen(port);

console.log('RESTful API server started on: ' + port);