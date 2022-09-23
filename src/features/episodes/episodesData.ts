import { GridColDef } from "@mui/x-data-grid";

export const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 300 },
  { field: "air_date", headerName: "Air date", width: 220 },
  { field: "created", headerName: "Created", width: 220 },
];
