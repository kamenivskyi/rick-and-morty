import { IResponseInfo } from "interfaces";

export interface ILocationResultsItem {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: Date | string;
}

export interface ILocationState {
  locationData: ILocationsResponce;
  status: "idle" | "loading" | "failed";
  error?: string | any;
}

export interface ILocationsResponce {
  info?: IResponseInfo;
  results?: ILocationResultsItem[];
  error?: string | any;
}
