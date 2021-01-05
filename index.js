const express = require('express')
const path = require('path')
const bodyParser = require('body-parser');
const app = express();
const PORT = 4000;
app.use(bodyParser.urlencoded({extended:true}));
app.listen(PORT,(req,res)=>{
    console.log('server is running at PORT', PORT)
})
let users =[
    {name:'Faiza',id:1, email:'faz.pak@gmail.com',password:'12345'},
    {name:'Kulsoom',id:1, email:'Kusloom@gmail.com',password:'11111'}
]
// app.get('/',(req,res)=>{
//     // res.send('<h1>My first App</h1>')
//     res.sendFile(path.join(__dirname,'public','index.html'))
// })
// app.get('/aboutus',(req,res)=>{
//     // res.send('<h1>AboutUs</h1>')
//     res.sendFile(path.join(__dirname,'public','aboutus.html'))
// })
// app.get('/contactus',(req,res)=>{
//     // res.send('<h1>AboutUs</h1>')
//     res.sendFile(path.join(__dirname,'public','contactus.html'))
// })
app.use(express.static(path.join(__dirname,'public')))
app.use(express.static(path.join(__dirname,'registration')))
app.get('/signup',(req,res)=>{
    res.sendFile(path.join(__dirname,'registration','signup.html'))
})
app.get('/signin',(req,res)=>{
    res.sendFile(path.join(__dirname,'registration','signin.html'))
})
app.post('/signup',(req,res)=>{
    //  res.send(req.body)
let {name,email,password}= req.body
let found =users.some((item)=>item.email==email)
if(found){
res.send('<h1>User already existed</h1>')
}
else{
    users.push ({name,email,password,id:users.length+1})
    //  res.send('<h1>new user added</h1>')
    //   res.sendFile(path.join(__dirname,'registration','signin.html'))
    res.redirect('/signin')
}
})
app.post('/signin',(req,res)=>{
    let {name,email,password}=req.body
    let found = users.some((item)=>item.password==password && item.email==email)
//  console.log('found in signin',found)
    if(found){
        res.send('<h1> Welcome </h1>')

    }
    else{

        res.redirect('/signin')
    }
})
