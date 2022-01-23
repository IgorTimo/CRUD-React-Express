import { TOKEN_SECRET } from "../server.js"
import jwt from "jsonwebtoken";


export function checkAuthToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

   
  
    if (token == null) return res.sendStatus(401)
  
    jwt.verify(token, TOKEN_SECRET, (err, user) => {
      console.log("Erorr >>> ", err)
  
      if (err) return res.sendStatus(403)
  
      console.log("User >>>> ", user)
      req.user = user
  
      next()
    })
  }