import 'dotenv/config';

const API_URL = process.env.API_URL;

export default async function fetchData(location_id: string) {
  const url = `${API_URL}/values/${location_id}/load-profile`;
  const query = '?beginDate=' + new Date().toISOString().slice(0, 10);

  try {
    const response = await fetch(url + query);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();

    console.log(json);
    return json;
  } catch (error) {
    console.error('__error fetching data: ', error.message);
  }
}
