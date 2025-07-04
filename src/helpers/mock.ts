import fetchData from './fetch';
import House from '../models/House';
import Unit from '../models/Unit';
import Meter from '../models/Meter';

export default async function createMockData() {
  const n_units = 5; // unique meter ids guaranteed up to n=86 with quick-n-dirty location_id generation below
  // create arrays of randomized meter ids
  await House.create({ id: 0 });
  for (let i = 0; i < n_units; i++) {
    const location_id_market = 1000000000 + i;
    const location_id_metering = 'a'.repeat(32) + String.fromCharCode(40 + i);  // quick'n'dirty -> fix
    const data_market = await fetchData(String(location_id_market));
    const data_metering = await fetchData(location_id_metering);
    await Unit.create({ id: i, houseId: 0 });
    console.log(fetchData(location_id_metering))
    await Meter.create({
      unitId: i,
      type: 'market_location',
      location_id: location_id_market,
      values: data_market[0].values,
    });
    await Meter.create({
      unitId: i,
      type: 'metering_location',
      location_id: location_id_metering,
      values: data_metering[0].values,
    });
  }
}
