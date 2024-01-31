const mongoose=require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');

const UserSchema=mongoose.Schema({
    firstName:String,
    lastName:String,
    email: { type: String,  unique: true, required: true },
    password:String,
    role:String,
},{strict:false})

UserSchema.plugin(uniqueValidator);

const user = mongoose.model('User',UserSchema)

module.exports=user