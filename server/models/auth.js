import mongoose from "mongoose";
const Schema = mongoose.Schema;
const authSchema = mongoose.Schema({
  email: String,
  content: [{
      type: Schema.Types.ObjectId,
      ref: "fileContent"
  }]
});

var auth = mongoose.model("auth", authSchema);

export default auth;
