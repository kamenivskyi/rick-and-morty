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
  episodeData: IEpisodesObject;
  status: "idle" | "loading" | "failed";
}

export interface IEpisodesObject {
  info: IResponseInfo;
  results: IEpisodesResultsItem[];
  message: string;
}
