import Meter from '../models/Meter';
import Unit from '../models/Unit';

const tableBody = document.querySelector('#data-table tbody');

// get metering values for each unit
const units = await Unit.findAll({    
  where: {
    houseId: 0,
  },
});
for (const unit of units) {
  const market_meters = await Meter.findAll({
    where: {
      unitId: unit.dataValues.id,
      type: 'market_location',
    },
  });
  const metering_meters = await Meter.findAll({
    where: {
      unitId: unit.dataValues.id,
      type: 'metering_location',
    },
  });

  let market_total = 0;
  let metering_total = 0;
  for (const value of market_meters[0].dataValues.values) {
    market_total += value.value;
  }
  for (const value of metering_meters[0].dataValues.values) {
    metering_total += value.value;
  }
  const solar_consumption = metering_total - market_total;

  // create table row for unit
  const row = document.createElement('tr');
  row.innerHTML = `
        <td>${unit.dataValues.id}</td>
        <td>${market_total}</td>
        <td>${metering_total}</td>
        <td>${solar_consumption}</td>
    `;
  tableBody.appendChild(row);
}
