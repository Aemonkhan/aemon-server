const express = require('express')
const path = require('path')
const bodyParser = require('body-parser');
const app = express();
const PORT = 4000;
app.use(bodyParser.urlencoded({extended:true}));
app.listen(PORT,(req,res)=>{
    console.log('server is running at PORT', PORT)
})
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
app.post('/signup',(req,res)=>{
    res.send(req.body)
})
