import { IResponseInfo } from "interfaces";

export interface ICharachter {
  image: string;
  name: string;
  id?: number;
  status: string;
  species?: string;
  url?: string;
  episode?: Array<string>;
  location?: ICharachterLocation;
  type?: string;
  created?: string;
}

export interface ICharachterLocation {
  name: string;
  url: string;
}

export interface ICharacterArrayItem {
  id: number;
  name: string;
  species: string;
  type: string;
  status: string;
  image: string;
}

export interface ICharactersObject {
  info: IResponseInfo;
  results: ICharacterArrayItem[];
  message: string;
}

export interface ICharactersState {
  charachters: ICharactersObject;
  status: "idle" | "loading" | "failed";
}
