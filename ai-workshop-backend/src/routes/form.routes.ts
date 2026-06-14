import express from "express";
import formSubmission from "../controllers/form.controller.js";

const router = express.Router();

router.post("/enquiry", formSubmission);

export default router;
