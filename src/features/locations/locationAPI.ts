import { fetchData } from "utils/fetchData";

export async function fetchLocations<T>(stringifiedParams: string) {
  const url = `/location${stringifiedParams}`;
  const request = await fetchData<T>(url);

  return request;
}
