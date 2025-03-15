import express from "express";
import { getProfile, updateProfile, createProfile } from "../controllers/profileController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

// ✅ Add a POST route to create a profile
router.route("/").get(isAuthenticated, getProfile).put(isAuthenticated, updateProfile).post(isAuthenticated, createProfile);

export default router;
