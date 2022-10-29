import { SelectChangeEvent } from "@mui/material";

export interface IProps {
  handleChange: (e: SelectChangeEvent | any) => void;
  value: string;
  array: IDropdownItem[];
  label: string;
  name: string;
}

export interface IDropdownItem {
  value: string;
  label: string;
}
