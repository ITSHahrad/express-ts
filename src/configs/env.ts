import { config } from "dotenv";

config();

export const env = {
    port: process.env.SERVER_PORT,
    databaseUrl: process.env.DATABASE_URL,
    jwtSecret: process.env.JWT_SECRET,
    corsOrigin: process.env.CORS_ORIGIN,
    corsMethods: process.env.CORS_METHODS,
    corsAllowedHeaders: process.env.CORS_ALLOWED_HEADERS,
    corsCredentials: process.env.CORS_CREDENTIALS,
    morganFormat: process.env.MORGAN_FORMAT,
};

export default env;