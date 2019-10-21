const mongoose = require('mongoose'); //mongooose is middleware to communicate mongodb with control
const Schema = mongoose.Schema;

var studentSchema = new Schema({
id:{
    type:Number,
    required:true //without any authentication donot enter data
},
name:{
    type:String,
    required:true
}
});

mongoose.model('b3stdtbl',studentSchema); //given collection name and that schema