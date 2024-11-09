import { complexSearch } from "../controllers/searchController.js";
import express from "express";
import { verifyToken } from "../middleware/authMiddleware.js";
const router = express.Router();

router.get("/complexSearch", verifyToken, complexSearch);

export default router;
