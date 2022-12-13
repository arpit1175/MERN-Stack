const router = require("express").Router();
const User = require("../Models/User");
//crypto js used to encrypt the password, so no one can see it in the database as well
const CryptoJS = require('crypto-js');
const jwt = require("jsonwebtoken");

 

//Register new user ...post method to get user details
router.post("/register", async (req, res)=>{
    const newUser = new User({
        username : req.body.username,
        email : req.body.email,
        password : CryptoJS.AES.encrypt(req.body.password, process.env.Pass_sec_key).toString()

    });

    //save method to save user to db..it is a promise which is Asynchronous funstion, 
    try{

        const savedUser = await newUser.save()
        res.status(201).json(savedUser)
    }catch(err){
        res.status(500).json(err);
    }
})


//Login function 

router.post("/login", async (req, res)=>{

    try{

        const user = await User.findOne({username: req.body.username} );
        !user && res.status(401).json("user not found");

        const decryptedpassword = CryptoJS.AES.decrypt(user.password, process.env.Pass_sec_key);
        const password = decryptedpassword.toString(CryptoJS.enc.Utf8);
        
        password !== req.body.password && res.status(401).json("incorrect password");

        //creating json web token for autorizaton ...used to authorize the user using an access token

        const accessToken = jwt.sign({
            id : user._id,
            isAdmin : user.isAdmin }, process.env.Jwt_key, {expiresIn:"3d"});

        const  { password1, ...others } = user._doc;   

        res.status(200).json({...others, accessToken}); //Access token also sent along with the user
        
    }catch(err){
        res.status(500).json(err);
    }

})

module.exports = router;
