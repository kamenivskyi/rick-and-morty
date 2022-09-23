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
