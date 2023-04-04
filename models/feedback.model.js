const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const feedbackSchema = new Schema({
    
    feedback : {type :String, required : true},
    instructor : {type : String, required : true}
    
    // workingSchedule : {type: mongoose.Schema.Types.ObjectId, ref:'workingSchedule'}
    
     
},{
        timestamps : true,
    
});


const Feedback = mongoose.model("Feedback", feedbackSchema);

module.exports = Feedback;