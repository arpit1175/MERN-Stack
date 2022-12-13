const jwt = require("jsonwebtoken");


const verifyToken = (req,res,next)=>{
    const authHeader = req.headers.token
    if(authHeader){
        const token = authHeader.split(" ")[1]
        jwt.verify(token, process.env.Jwt_key, (err, user)=>{
            if(err) res.status(403).json("token not valid")
            req.user = user;
            next();
        })

    }else{
        return res.status(401).json("not authenticated")
    }
}

const verifytokenandauth = (req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.id === req.params.id || req.user.isAdmin){
        next()
        }else{
            req.status(403).json("not allowed")
        }
    })
}

const verifytokenAdmin = (req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.isAdmin){
        next()
        }else{
            req.status(403).json("not allowed")
        }
    })
}


module.exports = {verifyToken, verifytokenandauth, verifytokenAdmin};