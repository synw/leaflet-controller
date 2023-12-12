import { query } from "@sqlbro/client";

async function loadCountries(names: Array<string>): Promise<Array<Record<string, any>>> {
  const q = `SELECT * FROM countries WHERE name IN ('${names.join("', '")}')`;
  console.log(q);
  const data = await query<Array<Record<string, any>>>(q);
  //console.log(data)
  return data
}

async function loadCountriesList(): Promise<Array<Record<string, any>>> {
  const q = `SELECT name FROM countries`;
  console.log(q);
  const data = await query<Array<Record<string, any>>>(q);
  //console.log(data)
  return data
}

export { loadCountries, loadCountriesList }