import { fetchData } from "utils/fetchData";

export async function fetchCharachters(stringifiedParams: string) {
  const url = `/character${stringifiedParams}`;
  console.log("URL: ", url);
  const request = await fetchData(url);

  return request;
}
