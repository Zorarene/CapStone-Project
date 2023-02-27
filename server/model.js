const mongoose = require('mongoose')
const TravelSchema = mongoose.Schema({
 trip: String,
 when: Date,
 where: String

})

module.exports = mongoose.model('travel', TravelSchema)