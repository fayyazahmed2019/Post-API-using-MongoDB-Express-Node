
const authModel = require('../Model/authschema');
const postModel = require('../Model/postSchema');
///signup api

const authsignup = (req, res)=>{
    
    

    let userCreate = new authModel({
        email: req.body.email, 
        password: req.body.password
    })
    
    userCreate.save()
    .then((response)=>{
        console.log(`response success`)

        res.status(200).send({result: response, Message: "Signup Data Successfully"})

        console.log(userCreate)
    }).catch((err)=>{

    res.status(400).send({result: err, Message: "Signup Data Not Successfully"})
    })

}



///post api

const authPostdata = (req, res)=>{
    
    

    let postCreate = new postModel({
        date: req.body.date, 
        detail: req.body.detail,
        amount: req.body.amount
    })
    
    postCreate.save()
    .then((response)=>{
        console.log(`response success`)

        res.status(200).send({result: response, Message: "Post Data Successfully"})

        console.log(postCreate)

    }).catch((err)=>{
        res.status(400).send({result: err, Message: "Post Data Not Successfully"})
    })

}

module.exports = {authsignup, authPostdata}