import express from 'express';

import { cars } from './cars.js';

const app = express();

app.get('/api/cars', (_req, res) => {
  res.json({ cars });
});

export default app;
