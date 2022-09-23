import { fetchData } from "utils/fetchData";

export async function fetchLocations(stringifiedParams: string) {
  const url = `/location${stringifiedParams}`;
  // console.log("URL: ", url);
  const request = await fetchData(url);

  return request;
}
