const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const employerSchema = Schema({
    full_name: {type: String, min:6, max: 100, require: true},
    email: {type: String, require: true},
    type: {type: String, ennum: ['Employer', 'Admin', 'Technician'], default: 'Employer'},
    password: {type: String, min:6, require: true},
    id_department: {type: Schema.Types.ObjectId, ref: 'Department'},
})

module.exports = model('Employer', employerSchema)