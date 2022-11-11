import { Router } from "express";
import { signIn, signUp } from '../controllers/use.controlers';

const router = Router();

router.get("/signup", signUp);
// router.post("/signin", signIn);
router.get("/signIn", signIn);
router.post("/signup", signUp);

export default router;
