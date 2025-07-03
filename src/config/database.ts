// sequelize instance for postgreSQL connection

import { Sequelize } from 'sequelize';

const DB_NAME = 'vrey';
const DB_USER = process.env.POSTGRES_USER;
const DB_PW = process.env.POSTGRES_PW;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PW}@localhost:5432/${DB_NAME}`);

export default sequelize
