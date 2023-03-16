// load mongoose since we need it to define a model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
UserSchema = new Schema({
    name: { type: String },
    email: { type: String },
    password: { type: String },
    apiKey: { type: String }
});
module.exports = mongoose.model('User', UserSchema);


/******************************************************************************
***
* ITE5315 – Project
* I declare that this assignment is my own work in accordance with Humber Academic Policy. 
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
* 
* Group member Name:Swapnil Roy Chowdhury, Sayani Pal Student IDs: N01469281, N01469469 Date: 12/06/2022
******************************************************************************
***/
