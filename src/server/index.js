const express = require('express');
const bodyParser= require('body-parser');
const axios= require('axios');

const app= express();
app.use(bodyParser.json())

 let photoLibrary= []
let myGoals=[]

 axios.get('https://api.unsplash.com/search/photos?client_id=2e5f698edf76fcb523dd6686c148e21a4ae2573064af285f07b12ea438dc131f&query=healthy%20habits')
    .then(res=>{
        //  console.log(res.data.results)
        photoLibrary= [...photoLibrary, ...res.data.results]

        return axios.get('https://api.unsplash.com/search/photos?client_id=2e5f698edf76fcb523dd6686c148e21a4ae2573064af285f07b12ea438dc131f&query=healthy%20habits&page=2')
})
    .then(res=>{
        //  console.log(res.data.results)
        photoLibrary= [...photoLibrary, ...res.data.results]

        return axios.get('https://api.unsplash.com/search/photos?client_id=2e5f698edf76fcb523dd6686c148e21a4ae2573064af285f07b12ea438dc131f&query=exercise')
    })
    .then(res=>{
        //  console.log(res.data.results)
        photoLibrary= [...photoLibrary, ...res.data.results]

        return axios.get('https://api.unsplash.com/search/photos?client_id=2e5f698edf76fcb523dd6686c148e21a4ae2573064af285f07b12ea438dc131f&query=exercise&page=2')
    })
    .then(res=>{
        photoLibrary= [...photoLibrary, ...res.data.results]
        return axios.get('https://api.unsplash.com/search/photos?client_id=2e5f698edf76fcb523dd6686c148e21a4ae2573064af285f07b12ea438dc131f&query=meditation')
    })
    .then(res=>{
        photoLibrary= [...photoLibrary, ...res.data.results]
        return axios.get('https://api.unsplash.com/search/photos?client_id=2e5f698edf76fcb523dd6686c148e21a4ae2573064af285f07b12ea438dc131f&query=organization')
    })
    .then(res=>{
        photoLibrary= [...photoLibrary, ...res.data.results]
    })


app.get('/api/photolibrary', (req,res)=>{
    // console.log(photoLibrary)
    res.status(200).send(photoLibrary)
})

app.post('/api/mygoals', (req,res)=>{
    // console.log('goal:', req.body.goal)
    const image = myGoals.find(img=> img.id ==req.body.id);
    // console.log('pre-if', image)
   if (!image){
       myGoals.push({ id: req.body.img.id, url: req.body.img.urls.thumb, goals: [] });
   }
   else {
       image.goals.push(req.body.goal);
   }
    // console.log('post-if', image)
    // console.log('post-if', myGoals)

    res.status(200).send(myGoals)
})

app.delete('/api/mygoals/:id', (req,res)=>{
    let{id} =req.params;
    // console.log('before filter', myGoals)
    myGoals = myGoals.filter((val)=>{
        // console.log(val.id, id);
        return (val.id !== id )
    }) 
    // console.log('after filter',myGoals)
    res.status(200).send(myGoals)
} )


app.listen(3005, ()=> console.log('listening on port 3005'))