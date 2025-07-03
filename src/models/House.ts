import sequelize from '../config/database';
import { DataTypes, Model, ModelDefined, Optional } from 'sequelize';

interface HouseAttributes {
  id: number;
}

type HouseCreationAttributes = Optional<HouseAttributes, 'id'>;

interface HouseInstance extends Model<HouseAttributes>, HouseAttributes {}

const House: ModelDefined<HouseAttributes, HouseCreationAttributes> =
  sequelize.define<HouseInstance>(
    'House',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    },
    {}
  );

export default House;
