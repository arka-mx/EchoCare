import express from "express";
import {getSoap, getConsultations, updateSoap} from "../controllers/dashboard.js"

const router=express.Router();

router.post("/get-soap",getSoap);
router.post("/get-consultations",getConsultations);
router.post("/update-soap",updateSoap);

export default router;