const express = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const {jwtkey} = require('../keys')
const router = express.Router()
const User = mongoose.model('User')
var fs = require('fs')
var ObjectId = require('mongodb').ObjectID;
const lineByLine = require('n-readlines');
const { assert } = require('console')

router.post('/signup',async (req,res)=>{
    
var lineReader1 = require('readline').createInterface({
    input: require('fs').createReadStream('test.txt')
});
var count = 0;
lineReader1.on('line', function(donor){
    
    count = donor;
    const num = parseInt(count)
    console.log(num)
    var count2 = num + 1;
    console.log(count2)
    var data = count2.toString();
    fs.writeFileSync('test.txt', data, 'utf8', (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });

var donorCount = 0
donorCount = data
    const {username,password,email,address,reciever} = req.body;

    try{
        const user = new User({username,password,email,address,reciever,donorCount})
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
    var donor = []
    assert.equal(null, err);
    var cursor= db.collection('donordb.users').find();
    cursor.forEach(function(doc, err){
        
        assert.equal(null, err);
        donor.push(doc);
    }, function() {
        db.close();
        res.render('Donation', {arr :donor })
        
    });
    donor.push(don);
    res.render('Donation', { arr: donor });
    

    try{
        
        
    }catch(err){
       return res.status(422).send(err.message)
    }

    
})

router.post('/updatedonor',async (req,res)=>{
    
    var lineReader1 = require('readline').createInterface({
        input: require('fs').createReadStream('../reciever/track_receiver.txt')
    });
    try{
    lineReader1.on('line', function(donor){
        
        count = donor;
        const num = parseInt(count);
        const num1 = num +1;
        var num2  = num1.toString();
        console.log(num2)
        const {username} = req.body;
        //const n = {username};
        //const name = n.toString()
        console.log(username)
        
        var mydoc = User.findOne({donorCount: num2})
        if(mydoc){
            var id = mydoc._id;
            var name1 = mydoc.address;
            //var na = name1.toString()
            console.log(ObjectId(id))
            console.log(name1)
        }
        var myquery = {donorCount: num};
        var newvalues = { $set: {reciever: username}};
    //update the donordb with the receiver name
        const u = User.updateOne({"_id": ObjectId(id)}, newvalues,function(err, res ){
            if(err) throw err;
            console.log("Donordb Updated !");
        });     
        /*User.findOneAndUpdate({
            donorCount: num2,
        },
        {
            $set:{reciever: name},
        })*/
    
    })    
    }catch(err){
        console.log(err)
    }
        
    
});


router.post('/create-recievers', )

module.exports = router