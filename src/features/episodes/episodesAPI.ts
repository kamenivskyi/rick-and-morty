import { fetchData } from "utils/fetchData";

export async function fetchEpisodes(stringifiedParams: string) {
  const url = `/episode${stringifiedParams}`;
  // console.log("URL: ", url);
  const request = await fetchData(url);

  return request;
}
