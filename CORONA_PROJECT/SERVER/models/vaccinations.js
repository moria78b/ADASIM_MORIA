const mongoose = require('mongoose');
const User = require('./User');

const vaccinationsSchema = mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, 
    Vaccination_number: [{ type: String }],
    dateOfVaccination:[{ type: Date }]
      
});


module.exports = mongoose.model('vaccinations', vaccinationsSchema);
