import express from "express";
import { UserController } from "../controllers/UserController.js";

export const routes = express.Router();


routes.get("/test", (req, res) => {
  res.send({
    msg: "YOUR EXPRESS BACKEND IS CONNECTED",
  });
});

routes.post("/users", (req, res) => {
    UserController.addUser(req, res);
});

routes.get("/users", (req, res) => {
  UserController.getUsers(req, res);
});

routes.get("/users/:email", (req, res) => {
  UserController.getOneUser(req, res);
});

routes.put("/users", (req, res) => {
    UserController.updateUser(req, res);
})


routes.delete("/users", (req, res) => {
    UserController.deleteUser(req, res);
})
