import 'dotenv/config';
import express from 'express';
import sequelize from './config/database';
import './models/associations';

import House from './models/House';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('..welcome to consumptuous..');
});

const db_connect = async () => {
  try {
    await sequelize.authenticate();
    console.log('__successfully connected to database');
  } catch (error) {
    console.error('__unable to connect to database: ', error);
  }
  try {
    await sequelize.sync({ force: true });
    console.log('__successfully synchronized all models to database');
  } catch (error) {
    console.error('__unable to sync database: ', error);
  }

  app.listen(PORT, () => {
    console.log(`__consumptuous server is running on http://localhost:${PORT}`);
  });
};

db_connect();
