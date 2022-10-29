import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { IDropdownItem, IProps } from "./interfaces";

export function Dropdown({
  value,
  handleChange,
  array,
  label,
  name,
}: IProps): JSX.Element {
  const renderDropdownItem = (item: IDropdownItem) => (
    <MenuItem value={item.value} key={item.value}>
      {item.label}
    </MenuItem>
  );

  return (
    <FormControl fullWidth sx={{ marginBottom: "20px" }}>
      <InputLabel id="status-select-label">{label}</InputLabel>
      <Select
        labelId="status-select-label"
        id="status-select"
        value={value}
        label={label}
        name={name}
        onChange={handleChange}
      >
        {array.map(renderDropdownItem)}
      </Select>
    </FormControl>
  );
}
