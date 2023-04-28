import { Router } from "express";
import { createTest, helloWorld } from "../controllers/test";

const router = Router();

router.get("/", helloWorld);
router.post("/post", createTest);

export default router;
