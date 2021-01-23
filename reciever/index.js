const express = require('express')
const bodyParser = require("body-parser")
const mongoose = require('mongoose')

const app = express()
const PORT = 3001
const {mogoUrl} = require('./keys')

require('./models/User');
const requireToken = require('./middleware/requiretoken')
const authRoutes = require('./routes/authRoutes')

app.use(bodyParser.json())
app.use(authRoutes)

mongoose.connect(mogoUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

mongoose.connection.on('connected',()=>{
    console.log('connected to mongo')
})
mongoose.connection.on('error',(err)=>{
    console.log('error mongo',err)
})



app.get('/',requireToken,(req,res)=>{
    res.send({username:req.user.username})
})


app.listen(PORT,()=>{
    console.log("server running"+PORT)
})