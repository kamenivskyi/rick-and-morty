import { fetchData } from "utils/fetchData";

export async function fetchCharachters<T>(stringifiedParams: string) {
  const url = `/character${stringifiedParams}`;
  const request = await fetchData<T>(url);

  return request;
}
