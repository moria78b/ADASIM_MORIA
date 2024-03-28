const mongoose = require('mongoose');
const User = require('./User');

const vaccinationsSchema = mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Link to the automatic code that Mongoose generated for the object   
    Vaccination_number: [{ type: String }],
    dateOfVaccination:[{ type: Date }]
      
});


module.exports = mongoose.model('vaccinations', vaccinationsSchema);
