import express from "express";
import { AuthorizationController } from "../controllers/AuthorizationController.js";
import { UserController } from "../controllers/UserController.js";
import { checkAuthToken } from "./auth.js";

export const routes = express.Router();


routes.get("/test", (req, res) => {
  res.send({
    msg: "YOUR EXPRESS BACKEND IS CONNECTED",
  });
});

routes.post("/users", (req, res) => {
    UserController.addUser(req, res);
});

routes.get("/users", checkAuthToken, (req, res) => {
  UserController.getUsers(req, res);
});

routes.get("/users/:email", (req, res) => {
  UserController.getOneUser(req, res);
});

routes.put("/users", checkAuthToken, (req, res) => {
    UserController.updateUser(req, res);
})


routes.delete("/users", (req, res) => {
    UserController.deleteUser(req, res);
})

routes.post("/auth", (req, res) => {
  AuthorizationController.logIn(req, res);
})
