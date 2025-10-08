import jwt from "jsonwebtoken"

 export const authenticateToken = (req,res,next) =>{
    const authHeader = req.header("Authorization");
    if(!authHeader) {
        return res.status(401).json({ message: "unauthorization: Missing Token"});
    }
    const [bear,token] = authHeader.split(" ");
    if(bear !== "Bear" || !token) {
        return res.status(401).json({ message: "unauthorized: invalid Token Format"});
    }
    jwt.verify(token, process.env.SECRET_KEY, (err, user) =>{
        if(error) {
            return res.status(403).json({ message: "Forbidden: invalid Token"});
        }
        req.user = user;
        next();
    })
    
}

export const verifyToken = token => {
    return jwt.verify(token, process.env.SECRET_KEY)
}