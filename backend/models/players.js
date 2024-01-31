const mongoose=require('mongoose')

const PlayerSchema=mongoose.Schema({
    name:String,
    post:String,
    number:Number,
    image:String,
    teamId:{type:mongoose.Schema.Types.ObjectId , ref:"Team"},
})

const player = mongoose.model('Player',PlayerSchema)

module.exports=player