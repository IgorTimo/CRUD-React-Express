import { User } from "../model/user.js";

export class UserController {
  static addUser(req, res) {
    const user = new User({
      username: req.body["username"],
      role: "user",
      email: req.body["email"],
      password: req.body["password"],
    });
    user.save().then(() => res.send({ msg: "User added" }));
  }

  static getUsers(req, res) {
    User.find()
      .then((users) => res.send({ users: users }))
      .catch((err) => {
        res.status(400).json({ e: err });
      });
  }

  static getOneUser(req, res) {
    User.findOne({ email: req.params.email })
      .then((user) => res.send({ user: user }))
      .catch((err) => {
        res.status(400).json({ e: err });
      });
  }

  static updateUser(req, res) {
    const user = User({
      _id: req.body.user._id,
      username: req.body.user.username,
      email: req.body.user.email,
      password: req.body.user.password,
    });

    User.updateOne({ _id: req.body.user._id }, user)
      .then(() => res.send({ msg: `Edited ${req.body.user.username}` }))
      .catch((err) => {
        res.status(400).json({ e: err });
      });
  }

  static deleteUser(req, res) {
    User.findOne({ _id: req.body.userId })
      .then((user) => {
        user.delete();
        res.send({ msg: `User with id ${req.body.userId} deleted` });
      })
      .catch((err) => {
        res.status(400).json({ e: err });
      });
  }
}
