import sequelize from '../config/database';
import { DataTypes, Model, Optional, ModelDefined } from 'sequelize';

interface UnitAttributes {
  id: number;
  houseId: number;
}

interface UnitInstance extends Model<UnitAttributes>, UnitAttributes {}

type UnitCreationAttributes = Optional<UnitAttributes, 'id'>;

const Unit: ModelDefined<UnitAttributes, UnitCreationAttributes> =
  sequelize.define<UnitInstance>(
    'Unit',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      houseId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Houses',
          key: 'id',
        },
      },
    },
    {}
  );

export default Unit;
