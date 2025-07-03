import House from './House';
import Unit from './Unit';
import Meter from './Meter';

House.hasMany(Unit, {
  foreignKey: 'houseId',
});

Unit.belongsTo(House, {
  foreignKey: 'houseId',
});
Unit.hasMany(Meter, {
  foreignKey: 'unitId',
});

Meter.belongsTo(Unit, {
  foreignKey: 'unitId',
});
