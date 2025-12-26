import express from "express";
import { login, checkLogin, signout, health } from "../controllers/auth.js";

const router=express.Router();

router.post("/login",login);
router.post("/check-login",checkLogin);
router.post("/signout",signout);
router.get("/health",health);

export default router;
