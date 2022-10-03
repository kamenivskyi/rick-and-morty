import { fetchData } from "utils/fetchData";

export async function fetchLocations(stringifiedParams: string) {
  const url = `/location${stringifiedParams}`;
  const request = await fetchData(url);

  return request;
}
