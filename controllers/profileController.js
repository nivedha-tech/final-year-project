import { catchAsyncErrors } from "../middlewares/catchAsyncError.js";
import { Profile } from "../models/profileSchema.js";
import ErrorHandler from "../middlewares/error.js";

// Get User Profile
export const getProfile = catchAsyncErrors(async (req, res, next) => {
  const profile = await Profile.findOne({ user: req.user._id }).populate("user", "name email");

  if (!profile) {
    return next(new ErrorHandler("Profile not found", 404));
  }

  res.status(200).json({ success: true, profile });
});



export const createProfile = catchAsyncErrors(async (req, res, next) => {
    const { image, gender, pronouns, headline, industry, schooling, location, contactInfo, skills, about } = req.body;
  
    let profile = await Profile.findOne({ user: req.user._id });
  
    if (profile) {
      return next(new ErrorHandler("Profile already exists", 400));
    }
  
    profile = await Profile.create({
      user: req.user._id,
      image,
      gender,
      pronouns,
      headline,
      industry,
      schooling,
      location,
      contactInfo,
      skills,
      about
    });
  
    res.status(201).json({ success: true, message: "Profile created successfully", profile });
  });
  


// ✅ Fix: Add updateProfile function
export const updateProfile = catchAsyncErrors(async (req, res, next) => {
  let profile = await Profile.findOne({ user: req.user._id });

  if (!profile) {
    return next(new ErrorHandler("Profile not found", 404));
  }

  profile = await Profile.findOneAndUpdate(
    { user: req.user._id },
    { $set: req.body },
    { new: true, runValidators: true }
  );

  res.status(200).json({ success: true, message: "Profile updated successfully", profile });
});
