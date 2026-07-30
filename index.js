const express = require("express");
const mongoose = require("mongoose");
const Student = require("./Models/student.js");
// const res = require("express/lib/response");
const bodyParser = require("body-parser");
const cors = require("cors"); // to local host to localhost restrict
const app = express();
mongoose.connect("mongodb+srv://praki_admin:MongoDB_Cloud_Cluster0@cluster0.6ics7wz.mongodb.net/?appName=Cluster0").then(()=> {
    console.log("Connected to DB");
});
app.use(bodyParser.urlencoded({extended :true}));
app.use(bodyParser.json());
app.use(cors());

//listenting
app.listen(5501,()=>{
    console.log("Server is running successfull ");
});

//get all student
app.get("/getStudents" , (req, res)=>{
    Student.find().then((student)=>{
    res.json(student);
    })
})

// create a new student 
app.post("/addStudent" , (req, res)=>{
    const data = req.body
    const newStudent = new Student({
        Name : data.Name,
        RollNo : data.RollNo,
        Department : data.Department,
        Year :data.Year
    });
    newStudent.save().then(()=>{
        res.json(newStudent)
    })
})

// Updating the Student 
app.put("/updateStudent/q" , (req, res)=>{
    const updateData = req.body
      Student.findByIdAndUpdate(
        {_id : mongoose.Types.ObjectId.createFromHexString(updateData._id)},
        {
        "Name" : updateData.Name , 
        "RollNo" : updateData.RollNo,
        "Department" : updateData.Department,
        "Year" :updateData.Year  
        }).then(()=>
    {
        res.status(200).json("Student Updated Successfully")
    })
})


app.put("/updateStudent", (req, res) => {
    const updateData = req.body;
    if (!updateData._id || !mongoose.Types.ObjectId.isValid(updateData._id)) {
        return res.status(400).send("Invalid or missing Student ID");
    }
    // Convert string ID to a real MongoDB ObjectId safely
    const studentId = mongoose.Types.ObjectId.createFromHexString(updateData._id);
    Student.findByIdAndUpdate(
        studentId, 
        {
            "Name": updateData.Name, 
            "RollNo": updateData.RollNo,
            "Department": updateData.Department,
            "Year": updateData.Year  
        },
        { new: true } // 3. Optional but helpful: returns the updated student document instead of the old one
    ) 
    .then((updatedStudent) => {
        if (!updatedStudent) {
            return res.status(404).send("Student not found");
        }
        res.status(200).json("Student Updated Successfully")
    })
    .catch((err) => {
        console.error(err);
        res.status(500).send("Internal Server Error");
    });
});


//for the path param update
app.put("/updateStudent/:id" , (req, res)=>{
    const updateData = req.body
      Student.findByIdAndUpdate({_id : mongoose.Types.ObjectId.createFromHexString(id)},
        {
        "Name" : updateData.Name,
        "RollNo" : updateData.RollNo,
        "Department" : updateData.Department , 
        "Year" : updateData.Year 
        }).then(()=>{
        res.status(200).json("Student Updated Successfully")
    })
})


//deleting the Student
app.delete("/deleteStudent/:id",(req, res)=>{
    const id = req.params.id;
    Student.findByIdAndDelete({"_id" : id}).then(()=>{
        res.status(200).json("Student Deleted Successfully")
    })
})
