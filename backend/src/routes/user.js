import express from "express"
import { getUserProfile,updateProfile,syncUser,followUser,getCurrentUser } from "../controllers/user.controller.js"; 
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router()

router.get("/profile/:username",getUserProfile)
router.get("/profile",protectRoute,updateProfile)
router.post("/sync",protectRoute,syncUser)
router.put("/me",protectRoute,getCurrentUser)
router.post("/follow/:targetUserId",protectRoute,followUser)

export default router;
