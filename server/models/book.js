let mongoose = require('mongoose');

// create a model class
let bookModel = mongoose.Schema({
    name: String,
    email: String,
    contact: String
},
{
    collection: "contacts"
});

module.exports = mongoose.model('contacts', bookModel);