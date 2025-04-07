import { Router } from "express";
import PingController from "../controllers/ping.controller";

const pingRoutes = Router();
const controllers = new PingController();

pingRoutes.get('/', controllers.ping);

export default pingRoutes;