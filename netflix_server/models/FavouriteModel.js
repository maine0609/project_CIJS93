const mongoose = require('mongoose')

const favouriteSchema = new mongoose.Schema({
    id: {type: String, required: true, trim: true},
    name: {type: String, required: false, trim: true, minlength: 2},
});

module.exports = mongoose.model('Favourite', favouriteSchema)