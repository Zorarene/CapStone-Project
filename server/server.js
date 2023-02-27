const express = require('express')
const app = express()
const Travel= require('./model')
const mongoose = require('mongoose')
const cors = require('cors')


app.use(express.json())
app.use(cors())
app.get('/api', (req, res)=>{
    res.send('app is working')
})

app.post('/api', (req, res)=> {
  const travel = req.body;
  Travel.create(travel, (err, data)=>{
      if(err){
        res.status(500).send(err)  
      }else{
          res.status(201).send(data)
      }
  })
})
// connect to database
mongoose.connect(
"mongodb+srv://zorabarnett:CapstoneProject@cluster0.i9ucsaw.mongodb.net/test",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("connected to DB")
);


app.listen(8080, ()=> (console.log("listening on port 8080")))