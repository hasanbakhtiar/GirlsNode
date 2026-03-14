
import express from 'express';
import itemRoutes from './routes/item.route';
import { errorHandler } from './middlewares/errorHandler.middleware';
import dotenv from 'dotenv';
import type { Config } from './types/server.type';
dotenv.config();


const app = express();

app.use(express.json());

// Routes
app.use('/api/items', itemRoutes);

// Global error handler (should be after routes)
app.use(errorHandler);






const config: Config = {
  port: Number(process.env.PORT) || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
};


app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});