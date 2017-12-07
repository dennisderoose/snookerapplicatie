let mongoose = require('mongoose');

let TopicSchema = new mongoose.Schema({
    name: String
});

mongoose.model('Topic', TopicSchema);