import { Router } from "express";
import { helloWorld } from "../controllers/test";

const router = Router();

router.get("/", helloWorld);

export default router;
