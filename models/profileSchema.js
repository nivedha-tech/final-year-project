import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  image: {
    type: String, 
    default: "", // URL of uploaded image
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Other"],
  },
  pronouns: {
    type: String,
  },
  headline: {
    type: String,
  },
  industry: {
    type: String,
  },
  schooling: {
    type: String,
  },
  location: {
    type: String,
  },
  contactInfo: {
    type: String,
  },
  skills: {
    type: [String],
  },
  about: {
    type: String,
  },
});

export const Profile = mongoose.model("Profile", profileSchema);