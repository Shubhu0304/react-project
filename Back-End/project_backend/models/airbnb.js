var mongoose = require('mongoose');
var Schema = mongoose.Schema;
AirbnbSchema = new Schema({
    
name: {type:String},
description: {type: String},
interaction: {type: String},
property_type: {type: String},
accomodation:{type: Number},
bathroom: {type: Number},
amenities: [{type: String}],
price: {type: Number},
images: {type: String},
host: {type: String},
address:{
    country:{type:String},
    country_code: {type:String}
},
availability: {
     availability_30: {type:Number},
      availability_60: {type:Number},
       availability_90: {type:Number},
        availability_365: {type:Number}
}


});
module.exports = mongoose.model('Airbnb', AirbnbSchema);


