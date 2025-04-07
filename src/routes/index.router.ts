import { Router } from "express";
import pingRoutes from "./ping.router";

const router = Router();

router.use('/ping', pingRoutes);

export default router;
