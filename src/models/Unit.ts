import sequelize from '../config/database';
import { DataTypes, Model } from 'sequelize';

interface UnitAttributes {
  id: number,
}

interface UnitInstance extends Model<UnitAttributes>, UnitAttributes {};

const Unit = sequelize.define<UnitInstance>('Unit', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  }
}, {});

export default Unit;
