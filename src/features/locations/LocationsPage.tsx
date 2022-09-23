import { ErrorBoundary } from "react-error-boundary";
import { Typography } from "@mui/material";
import ErrorFallback from "components/ErrorFallback";
import LocationsTable from "./LocationsTable";

export function LocationsPage() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Typography component="h2" variant="h6" margin="15px 0" align="center">
        Locations
      </Typography>
      <LocationsTable />
    </ErrorBoundary>
  );
}
