// // Express JS implemantation
// const express = require("express");
// const app = express();
// //mongoose learning 
// const mongoose = require("mongoose");
// mongoose.connect("mongodb+srv://praki_admin:MongoDB_Cloud_Cluster0@cluster0.6ics7wz.mongodb.net/?appName=Cluster0").then(()=> {
//     console.log("Connected to DB");
// });
// // body parser 
// const bodyParser = require("body-parser")
// app.use(bodyParser.urlencoded({extended :true}))
// app.use(bodyParser.json())

// const Student = require("./Models/student.js");
// const res = require("express/lib/response");
//  const student = require("./Models/student.js");

// //for running the server
// //two params - port and method
// app.listen(5501,()=>{
//     console.log("Server is running successfull ");
// });

// app.get("/getStudents" , (req, res)=>{
//     Student.find().then((student)=>{
//     res.json(student);
//     })
// })

// app.post("/addStudent" , (req, res)=>{
//     const data = req.body
//     const newStudent = new Student({
//         Name : data.Name,
//         RollNo : data.RollNo,
//         Department : data.Department,
//         Year :data.Year
//     });
//     newStudent.save().then(()=>{
//         res.send("inserted")
//     })
// })

// app.put("/updateStudent" , (req, res)=>{
//     const updateData = req.body
//       Student.updateOne({_id : mongoose.Types.ObjectId.createFromHexString(updateData._id)},{"Name" : updateData.Name }).then(()=>{res.send("Updated")})
// })

// app.delete("/deleteStudent",(req, res)=>{
//     Student.deleteOne({"Name" : "Prakash R"}).then(()=>{res.send("Deleted")})
// })





// // // to specify the routing 
// // // twoparams
// // //baseurl+specific endpoint -> lcf/api/{getRecord}
// // // function-> with two param == req and response
// // app.get( "/",(req,res)=>{
// //     res.send("Hello DEV !")
// // } )

// // app.get( "/Praki",(req,res)=>{
// //     res.send("You are Doing Great !")
// // } )






