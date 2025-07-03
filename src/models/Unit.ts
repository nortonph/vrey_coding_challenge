import sequelize from '../config/database';
import { DataTypes, Model } from 'sequelize';
import House from './House';
import Meter from './Meter';

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

Unit.belongsTo(House, {
  foreignKey: 'houseId'
})
Unit.hasMany(Meter, {
  foreignKey: 'unitId'
})

export default Unit;
