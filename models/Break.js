let mongoose = require('mongoose');
let BreakSchema = new mongoose.Schema({

    id: String,
    aantalpunten: Number,
    datum: String,
    user: String,
    typeGemaakt: String,
    tegenstander: String

});
mongoose.model('Break', BreakSchema);