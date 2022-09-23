import { ErrorBoundary } from "react-error-boundary";
import EpisodesTable from "./EpisodesTable";
import { Typography } from "@mui/material";
import ErrorFallback from "components/ErrorFallback";

export function EpisodesPage() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Typography component="h2" variant="h6" margin="15px 0" align="center">
        Episodes
      </Typography>
      <EpisodesTable />
    </ErrorBoundary>
  );
}
