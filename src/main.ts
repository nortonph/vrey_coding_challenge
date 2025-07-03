import 'dotenv/config';
import express from 'express';
import sequelize from './config/database';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('..welcome to consumptuous..');
});

const db_connect = async () => {
  try {
    await sequelize.authenticate();
    console.log('successfully connected to database');
  } catch (error) {
    console.error('unable to connect to database:', error);
  }

  app.listen(PORT, () => {
    console.log(`consumptuous server is running on port ${PORT}`);
  });
};

db_connect();
