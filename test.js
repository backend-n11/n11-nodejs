const auth = (req, res, next)=>{

  jwt.verify(token, skey, (err, decode)=>{
    if(err){
      res.status(403).send("Access denied")
    }
    
    req.user = decode
  })
  next()
}
