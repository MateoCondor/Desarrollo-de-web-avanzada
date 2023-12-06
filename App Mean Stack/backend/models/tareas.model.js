const {model, Schema} = require('mongoose');

const tareaSchema = new Schema({
    title: String,
    desc: String,
    complete: Boolean
});

module.exports = model('tarea', tareaSchema);