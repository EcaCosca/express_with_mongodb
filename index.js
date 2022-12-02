const express = require('express');
const mongoose = require('mongoose');
const Student = require('./models/students')

const app = express();
const port = 3000

app.use(express.json())

mongoose.connect('mongodb+srv://new:newnewnew@sandbox.apxur.mongodb.net/?retryWrites=true&w=majority');

const db = mongoose.connection;

db.on('error', console.error.bind(console, "MongoDB cannot connect:"))


app.get('/', (req, res) => {
    Student.find({}, (err, data) => res.send(data))
});

app.post('/', (req, res) => {
    Student.create({ name: 'John', first_name: 'Doe', email: 'john@doe.com' })
    .then((msg) => res.send(msg));
});

app.put('/', (req, res) => {
    Student.updateMany({name: 'John'}, {$set: {name:'Bob'}})
    .then((msg) => res.send(msg));
});

app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}/`)
})