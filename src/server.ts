import express from 'express';
import cors from 'cors';
import testRoute from './routes/test';
import { config } from 'dotenv';

config(); // using .env
const app = express(); // creating express app instance

app.use(express.json()); // parsing incoming request body
app.use(cors({ origin: [] })); // using CORS
app.use('/test', testRoute); // Routes

app.listen(process.env.SERVER_PORT || 3000, () => { 
  console.log(`$ server running on port ${process.env.SERVER_PORT || 3000}`);
});