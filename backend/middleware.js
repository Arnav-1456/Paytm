const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('./config');

const authMiddleware = (req,res, next) =>{
    const  authHeader = req.headers.authorization
    console.log("10")

    if(!authHeader || !authHeader.startsWith('Bearer ')){
       return res.status(403).json({})
    }
    console.log("11")
    const token = authHeader.split(' ')[1];
 try{
        const decode = jwt.verify(token,JWT_SECRET)
        console.log("11")
        if(decode.userId){
            req.userId = decode.userId;
            next() ;
            
        }   
        
        console.log("12")
    }catch(err){
        return res.status(403).json({})
    }
    console.log("13")
}
module.exports= {
    authMiddleware  
}