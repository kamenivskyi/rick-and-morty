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
  episodes: {
    info: IResponseInfo | Object;
    results: Array<IEpisodesResultsItem>;
    message: string;
  };
  status: "idle" | "loading" | "failed";
}
