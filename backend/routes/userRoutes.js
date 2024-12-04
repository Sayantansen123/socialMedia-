import express from "express";
import { followUnfollowUser, getProfile, loginUser, logoutUser, signupUser, updateUser } from "../controllers/userController.js";
import protectRoute from "../middlewares/protectRoute.js";

const router = express.Router();

router.get("/profile/:username",getProfile)
router.post("/signup",signupUser)
router.post("/login",loginUser)
router.post("/logout",logoutUser)
router.post("/follow/:id", protectRoute, followUnfollowUser); // Toggle state(follow/unfollow)
router.post("/update/:id", protectRoute, updateUser)

export default router;