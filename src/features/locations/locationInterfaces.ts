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
  locationData: {
    info: IResponseInfo | Object;
    results: Array<ILocationResultsItem>;
    message: string;
  };
  status: "idle" | "loading" | "failed";
}
