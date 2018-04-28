//express
//body-parser (parses the body of your request and puts in on the request object so you can access it in an endpoint)

//top level middleware is called top level because at the top of the file so it affects every endpoint. 
        //app.use(//middleware in here) will only impact the endpoints below it
        //app.use(body-parser) is top level middleware because it is at the top of the page. 

// const app= express()
//app.METHOD(PATH, HANDLER FN)
// When you get a request: 
    // 1- it looks for the matching method (get, put, post, or delete)
    //2- it looks for the matching path
    //3- once both are found and matching, it will execute the handler function
    //4- respond with ...... res.status(200).send(//data here)



//FRONTEND

// getAllUSers(){
//     axios.get('api/users').then( (response)=>{this.setState({users: response.data})
// }


//BACKEND
//only because we haven't used databases yet, we have to store some things in the server right now
// let users=[]

//     app.get('api/users', (req,res)=>{
//         res.status(200).send(users)
//     })