import sequelize from '../config/database';
import { DataTypes, Model, ModelDefined, Optional } from 'sequelize';

interface MeterValue {
  value: number;
  quality: string;
  unit: string;
  startDate: Date;
}

interface MeterAttributes {
  id: number;
  unitId: number;
  type: string;
  location_id: number | string;
  values: MeterValue[];
}

interface MeterInstance extends Model<MeterAttributes>, MeterAttributes {}

type MeterCreationAttributes = Optional<MeterAttributes, 'id'>;

const Meter: ModelDefined<MeterAttributes, MeterCreationAttributes> =
  sequelize.define<MeterInstance>(
    'Meter',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      unitId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Units',
          key: 'id',
        },
      },
      type: {
        type: DataTypes.STRING,
      },
      location_id: {
        type: DataTypes.VIRTUAL,
      },
      values: {
        type: DataTypes.JSON,
      },
    },
    {}
  );

export default Meter;
