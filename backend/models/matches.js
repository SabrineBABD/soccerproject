
const mongoose=require('mongoose')

const MatchesSchema=mongoose.Schema({
    teamOne:String,
    teamTwo:String,
    scoreOne:String,
    scoreTwo:String,
}, { timestamps: true })

const match = mongoose.model('Match',MatchesSchema)

module.exports=match