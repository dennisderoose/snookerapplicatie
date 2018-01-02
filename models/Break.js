let mongoose = require('mongoose');

let BreakSchema = new mongoose.Schema({
    id: String,
    break: Number,
    date: { type: Date, default: Date.now },
    user: String
});

mongoose.model('Break', BreakSchema);