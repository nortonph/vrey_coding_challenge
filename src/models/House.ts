import sequelize from '../config/database';
import { DataTypes, Model } from 'sequelize';
import Unit from './Unit';

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

House.hasMany(Unit, {
  foreignKey: 'houseId'
});

export default House;
