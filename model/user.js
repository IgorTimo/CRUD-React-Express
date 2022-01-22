import mongoose from "mongoose";


const Schema = mongoose.Schema;
const userSchema = new Schema({
  username:  String, 
  role: String,
  email: String,
  password: String,
  rememberToken: String //хэш передаём зашифрованным в куки
});


export const User = mongoose.model("User", userSchema);