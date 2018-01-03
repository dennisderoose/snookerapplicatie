let mongoose = require('mongoose');

let BreakSchema = new mongoose.Schema({
    id: String,
    aantalpunten: Number,
    date: String,
    user: String
});

mongoose.model('Break', BreakSchema);