import { Typography } from "@mui/material";
import EpisodesTable from "./EpisodesTable";

export function EpisodesPage() {
  return (
    <div>
      <Typography component="h2" variant="h6" margin="15px 0" align="center">
        Episodes
      </Typography>
      <EpisodesTable />
    </div>
  );
}
