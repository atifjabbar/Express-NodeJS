const express = require("express")
const app = express();

//new model
const mongoose = require('mongoose');

app.use(express.json());
require('./model/student')

mongoose.connect("mongodb://localhost/B3S1DB")
.then(()=>{console.log("DB Connected")})
.catch(err=>{console.log(err)})

/*
app.get('/', (req, res) => {
    res.send('Hello World!');
});

//  object is a pair of key and value. below we are creating an object named students which holds such pair.
var students = [
    {id: 1, name: 'Faheem'},
    {id: 2, name: 'Waseem'},
    {id: 3, name: 'Das'},
    {id: 4, name: 'Ubaid'}
];

app.get('/students', (req, res) => {
    res.send(students);
});

app.get('/student/:id', (req, res)=> {
    var student = students.find(s => s.id === parseInt(req.params.id));
    res.send(student);
    // res.send(students[req.params.id]);
});

app.use(express.json())
app.post('/student',(req,res)=>{
    var student = {
        id: students.length+1,
        name: req.body.name
    };
    students.push(student);
    res.send(console.log('Student Added'));

});

app.put('/student/:id',(req,res)=>{
    var student = students.find(s=>s.id === parseInt(req.params.id));
    student.name = req.body.name;
    res.send("Record Updated");
});

app.delete('/student/:id',(req,res)=>{
var student = students.find(s=>s.id === parseInt(req.params.id));
var index = students.indexOf(student);
students.splice(index,1);
res.send("Data Deleted");
});
*/
app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
    
});
