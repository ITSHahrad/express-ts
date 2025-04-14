import express from "express";
import { env } from "@/configs/env";
import database from "@/libs/database";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import helmetConfig from "@/configs/helmet";
import jsonSafetyMiddleware from "@/middlewares/json.middleware";

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(jsonSafetyMiddleware);
app.use(morgan(env.morganFormat || 'dev'));
app.use(helmet(helmetConfig));
app.use(cors({
    origin: env.corsOrigin,
    methods: env.corsMethods,
    allowedHeaders: env.corsAllowedHeaders,
    credentials: (env.corsCredentials ? env.corsCredentials : true) as boolean,
}));

app.listen(env.port, async () => {
    await database; // Connect to database
    console.log(`Server is running on port ${env.port}`);
});
