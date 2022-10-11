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
  locationData: ILocationsObject;
  status: "idle" | "loading" | "failed";
}

export interface ILocationsObject {
  info: IResponseInfo;
  results: ILocationResultsItem[];
  message: string;
}
