import sequelize from '../config/database';
import { DataTypes, Model } from 'sequelize';

interface HouseAttributes {
  id: number,
}

interface HouseInstance extends Model<HouseAttributes>, HouseAttributes {}

const House = sequelize.define<HouseInstance>('House', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
}, {});

export default House;
