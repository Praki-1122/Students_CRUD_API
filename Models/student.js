const { type } = require("express/lib/response");
const mongoose = require("mongoose");
const studentModel = new mongoose.Schema({
    Name : {
        type : String,
        required : true
    }, 
    RollNo : {
        type : Number,
        required : true
    }, 
    Department : {
        type : String,
        required : true
    },
     Year : {
        type : Number,
        required : true
    }
}
);

module.exports = mongoose.model("Student", studentModel);