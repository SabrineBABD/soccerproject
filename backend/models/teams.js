const mongoose=require('mongoose')

const TeamSchema=mongoose.Schema({
    name:String,
    description:String ,
    players:[{type:mongoose.Schema.Types.ObjectId , ref:"Player"}],
})

const team = mongoose.model('Team',TeamSchema)

module.exports=team