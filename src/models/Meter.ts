import sequelize from '../config/database';
import { DataTypes, Model } from 'sequelize';
import Unit from './Unit';

interface MeterValue {
  value: number,
  quality: string,
  unit: string,
  startDate: Date,
}

interface MeterAttributes {
  id: number,
  unitId: number,
  type: string,
  location_id: number,
  values: MeterValue[]
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
  type: {
    type: DataTypes.STRING
  },
  location_id: {
    type: DataTypes.STRING,
  },
  values: {
    type: DataTypes.JSON,
  }
}, {});

Meter.belongsTo(Unit, {
  foreignKey: 'unitId'
})

export default Meter;
