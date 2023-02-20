
const mongoose = require('mongoose');

const Ad = mongoose.model('Ad', new mongoose.Schema({
    about: String,
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
    
}));

module.exports = Ad;