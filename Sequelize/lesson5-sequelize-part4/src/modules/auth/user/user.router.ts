


import express from "express";
import { allUsers, singleUser, editUser, deleteUser } from "./user.controller";
import { authMiddleware, isAdmin } from "../../../middleware/auth";

const router = express.Router();

router.get("/", authMiddleware, isAdmin, allUsers);
router.get("/:id", authMiddleware, isAdmin, singleUser);
router.put("/:id", authMiddleware, isAdmin, editUser);
router.delete("/:id", authMiddleware, isAdmin, deleteUser);

export default router;