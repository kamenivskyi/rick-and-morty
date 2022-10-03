import { fetchData } from "utils/fetchData";

export async function fetchEpisodes(stringifiedParams: string) {
  const url = `/episode${stringifiedParams}`;
  const request = await fetchData(url);

  return request;
}
