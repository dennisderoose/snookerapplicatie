let mongoose = require('mongoose');

let BreakSchema = new mongoose.Schema({
    id: String,
    aantalpunten: Number,
    date: Number,
    user: String
});

mongoose.model('Break', BreakSchema);