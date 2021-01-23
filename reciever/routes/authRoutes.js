const express = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const {jwtkey} = require('../keys')
const router = express.Router()
const User = mongoose.model('User')
var fs = require('fs')
const lineByLine = require('n-readlines');
const { assert } = require('console')
var receiverCount = 0

router.post('/signup',async (req,res)=>{
    
    var lineReader1 = require('readline').createInterface({
        input: require('fs').createReadStream('track_receiver.txt')
    });
    var count = 0;
    lineReader1.on('line', function(receiver){
        
        count = receiver;
        const num = parseInt(count)
        console.log(num)
        var count2 = num + 1;
        console.log(count2)
        var data = count2.toString();
        fs.writeFileSync('track_receiver.txt', data, 'utf8', (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
    
    
   
    receiverCount = data
    const {username,password,email,address} = req.body;

    try{
        const user = new User({username,password,email,address,receiverCount})
        user.save();
        const token = jwt.sign({userId:user._id},jwtkey)
        res.send({token})
        
        
    }catch(err){
       return res.status(422).send(err.message)
    }

    
})
});

router.post('/signin', async (req,res)=>{
    const {username,password} = req.body
    if(!username || !password){
        return res.status(422).send({error :"must provide email or password"})
    }
    const user = await User.findOne({username})
    if(!user){
        return res.status(422).send({error :"must provide email "})
    }
    try{
        await user.comparePassword(password);
        const token = jwt.sign({userId:user._id},jwtkey)
        res.send({token})
    }catch(err){
        return res.status(422).send({err :"must provide "})
    }
})
router.get('/getdonor',async (req,res, next)=>{
    var d = mongoose.Collection.find({"recieverdb.users.username": "T"})
        console.log(d)
   
})

module.exports = router