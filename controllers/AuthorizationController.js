import jwt from "jsonwebtoken";
import { User } from "../model/user.js";
import { TOKEN_SECRET } from "../server.js";


export class AuthorizationController {
   
  static logIn(req, res) {
    User.findOne({ email: req.body.email })
      .then((user) => {
        if (user.password === req.body.password) {
          const token = jwt.sign({email: user.email, role: user.role}, TOKEN_SECRET, { expiresIn: 10000});
          console.log(token);
          res.send({ token: token, user: user });
        }
      })
      .catch((err) => {
        res.status(400).json({ e: err });
      });
  }


}
