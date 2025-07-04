import 'dotenv/config';
import path from 'path';
import express from 'express';
import sequelize from './config/database';
import createMockData from './helpers/mock';
import controller from './controllers/index';
import './models/associations';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', controller.getAllMeters);

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
  try {
    await createMockData();
    console.log('__successfully generated mock data and seeded database');
  } catch (error) {
    console.error('__unable to generat mock data or seed database: ', error);
  }

  app.listen(PORT, () => {
    console.log(`__consumptuous server is running on http://localhost:${PORT}`);
  });
};

db_connect();
