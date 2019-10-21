const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use(express.json());

require('./model/student');

//mongoose.connect("mongodb://localhost/B3S2DB", { useNewUrlParser: true })
mongoose.connect("mongodb+srv://testuser:test123@iot-wbye6.mongodb.net/test?retryWrites=true", { useNewUrlParser: true })

.then(()=>{console.log("DB Connected")})
.catch((err)=>{console.log(err)})

const Student = mongoose.model('stdtbl');
app.post('/student',(req,res)=>{
    var newStudent = {
        id:req.body.id,
        name:req.body.name
    };
    var s = Student(newStudent)
    s.save()
    .then(()=>{console.log("Recored Added")})
    .catch(e=>{console.log(e)})
})

app.get('/',(req,res)=>{
    Student.find({})
    .then(s =>{
        res.send(s);
    })
    .catch(e=>{console.log(e)})
})

app.put('/student/:id',(req,res)=>{
    Student.findOne({id:req.params.id})
    .then(s=>{
        s.name = req.body.name;
        s.save()
        .then(()=>{console.log("Data Updated")})
        .catch(e=>{console.log("Error while saving data")})
    })
    .catch(e=>{console.log("Error while fetching data")})
})

app.delete('/student/:id',(req,res)=>{
    Student.remove({id:req.params.id})
    .then(()=>{console.log("Data Delete")})
    .catch(e=>{console.log(e)})
})

app.listen(3000,()=>{console.log("Server Is Running 3000")});