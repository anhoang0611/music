import { Router } from "express";
import { protectRoute, requireAdmin } from "../middleware/auth.middleware.js";
import { getStats } from "../controller/stat.controller.js";
import { Song } from "../models/song.model.js";
import { User } from "../models/user.model.js";
import { Album } from "../models/album.model.js";

const router = Router();

router.get("/", protectRoute, requireAdmin, getStats);

export default router;
