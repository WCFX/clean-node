import { app } from './config/app';
import env from 'dotenv';

env.config();

app.listen(process.env.PORT, () => {
  console.log(`Running at PORT: ${process.env.PORT}`);
});
