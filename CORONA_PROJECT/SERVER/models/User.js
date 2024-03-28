const mongoose = require('mongoose');
const vaccinations = require('./vaccinations');

const userSchema = mongoose.Schema({
    // Personal details
    Name: { type: String, required: true },
    id: { type: String, required: true },
    address:{ type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    telephone: { type: String },
    mobilePhone: { type: String },
    positiveAnswer: { type: Date, required: true },
    recoveryDate:{ type: Date, required: true }  , 
    vaccinations: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'vaccinations'
    }] 
});

module.exports = mongoose.model('user', userSchema);
