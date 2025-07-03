import sequelize from '../config/database';
import { DataTypes, Model } from 'sequelize';
import Unit from './Unit';

interface MeterAttributes {
  id: number,
  unitId: number,
}

interface MeterInstance extends Model<MeterAttributes>, MeterAttributes {}

const Meter = sequelize.define<MeterInstance>('Meter', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  unitId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Units',
      key: 'id'
    }
  },
}, {});

Meter.belongsTo(Unit, {
  foreignKey: 'unitId'
})

export default Meter;
