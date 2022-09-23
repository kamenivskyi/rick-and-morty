import { Typography } from "@mui/material";
import LocationsTable from "./LocationsTable";

export function LocationsPage() {
  return (
    <div>
      <Typography component="h2" variant="h6" margin="15px 0" align="center">
        Locations
      </Typography>
      <LocationsTable />
    </div>
  );
}
