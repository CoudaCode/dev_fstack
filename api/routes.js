import DbController from "./controllers.js";
import { Router } from "express";

const router = Router();

router.get("/", DbController.getPosts);
router.post("/insert", DbController.insertPost);

export default router;
