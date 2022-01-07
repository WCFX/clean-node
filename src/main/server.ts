import express from 'express';
import env from 'dotenv';

env.config();

const app = express();

express.json();

app.get('/', (req, res) => {
  return res.json({ message: 'Olá Marilene' });
});

app.listen(process.env.PORT, () => {
  console.log(`Running at PORT: ${process.env.PORT}`);
});
