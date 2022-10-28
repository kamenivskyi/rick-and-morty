import { IResponseInfo } from "interfaces";

export interface IEpisodesResultsItem {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: Date;
}

export interface IEpisodesState {
  episodeData: IEpisodesResponse;
  status: "idle" | "loading" | "failed";
  error?: string | any;
}

export interface IEpisodesResponse {
  info?: IResponseInfo;
  results?: IEpisodesResultsItem[];
  error?: string | any;
}
