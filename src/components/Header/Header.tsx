import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <AppBar position="static" color="transparent">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex" },
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Rick and Morty
          </Typography>
          <nav style={{ marginLeft: "auto" }}>
            <Button
              to="/"
              variant="text"
              color="primary"
              size="small"
              component={NavLink}
              sx={{ marginRight: "10px" }}
            >
              Charachters
            </Button>
            <Button
              color="primary"
              variant="text"
              to="/episodes"
              component={NavLink}
              sx={{ marginRight: "10px" }}
              size="small"
            >
              Episodes
            </Button>
            <Button
              color="primary"
              variant="text"
              to="/locations"
              component={NavLink}
              sx={{ marginRight: "10px" }}
              size="small"
            >
              Locations
            </Button>
            <Button
              color="primary"
              variant="text"
              to="/watch-list"
              component={NavLink}
              sx={{ marginRight: "10px" }}
              size="small"
            >
              Watch list
            </Button>
          </nav>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
