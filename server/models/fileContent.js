import mongoose from "mongoose";
const Schema = mongoose.Schema;
const fileSchema = mongoose.Schema({
  title: String,
  file: String,
  owner: {
    type: Schema.Types.ObjectId,
    ref: "auth",
  },
});

var fileContent = mongoose.model("fileContent", fileSchema);

export default fileContent;
