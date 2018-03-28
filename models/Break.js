let mongoose = require('mongoose');

let BreakSchema = new mongoose.Schema({
    id: String,
    aantalpunten: Number,
    typeGemaakt: String,
    datum: String,
    user: String
});

mongoose.model('Break', BreakSchema);