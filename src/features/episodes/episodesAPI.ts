import { fetchData } from "utils/fetchData";

export async function fetchEpisodes<T>(stringifiedParams: string) {
  const url = `/episode${stringifiedParams}`;
  const request = await fetchData<T>(url);

  return request;
}
