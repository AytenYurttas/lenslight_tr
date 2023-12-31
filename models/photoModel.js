import mongoose from "mongoose";

const{Schema}= mongoose

const photoSchema= new Schema({
    name:{
        type: String,
        require: true,
        trim:true
    },
    description:{
        type: String,
        require:true,
        trim:true
    },
    uploadeAt:{
        type: Date,
        default: Date.now,
    },
});

const Photo = mongoose.model('Photo',photoSchema)

export default Photo;