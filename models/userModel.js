import { model, models, Schema, mongoose } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  notes: 
    {
      type: [Schema.Types.ObjectId],
      required: false,
      ref: "Note",
    },
});

const User = models.User || model("User", userSchema)

export default User