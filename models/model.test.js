const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const testSchema = new Schema({
    password: {type: String, required: true},
    username: {type: String, required: true}
});
module.exports = mongoose.model('test', testSchema);