const express = require('express');
const bodyParser= require('body-parser');
const axios= require('axios');

const app= express();
app.use(bodyParser.json())

 let photoLibrary= []
let myGoals=[]

 axios.get('https://api.unsplash.com/search/photos?client_id=2e5f698edf76fcb523dd6686c148e21a4ae2573064af285f07b12ea438dc131f&query=healthy%20habits').then(res=>{
     photoLibrary= res.data.results
 })

app.get('/api/photolibrary', (req,res)=>{
    // console.log(photoLibrary)
    res.status(200).send(photoLibrary)
})

app.post('/api/mygoals', (req,res)=>{
    myGoals.push(req.body)
    res.status(200).send(myGoals)
})

app.listen(3005, ()=> console.log('listening on port 3005'))