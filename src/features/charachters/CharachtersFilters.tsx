import { useEffect, useState } from "react";
import { SelectChangeEvent, Grid, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import Dropdown from "ui/Dropdown";
import { genders, species, statuses } from "./charactersData";

export function CharachtersFilters() {
  const [specie, setSpecie] = useState<string>("all");
  const [status, setStatus] = useState<string>("all");
  const [gender, setGender] = useState<string>("all");
  const location = useLocation();
  const navigate = useNavigate();

  let queries = queryString.parse(location.search);
  console.log("queries: ", queries);

  const handleChange = (value: string, propName: string) => {
    if (value === "all") {
      delete queries[propName];
    } else {
      queries[propName] = value;
    }

    navigate("/?" + queryString.stringify(queries), { replace: true });
  };

  useEffect(() => {
    function setDataFromQueryParams() {
      Object.entries(queries).forEach(([key, value]: Array<string | any>) => {
        switch (key) {
          case "species":
            setSpecie(value);
            break;
          case "gender":
            setGender(value);
            break;
          case "status":
            setStatus(value);
            break;
          default:
            break;
        }
      });
    }
    setDataFromQueryParams();
  }, [location.search]);

  const handleGenderChange = (event: SelectChangeEvent) => {
    handleChange(event.target.value, "gender");
  };

  const handleSpecieChange = (event: SelectChangeEvent) => {
    handleChange(event.target.value, "species");
  };

  const handleStatusChange = (event: SelectChangeEvent) => {
    handleChange(event.target.value, "status");
  };

  return (
    <Grid container spacing={2} sx={{ margin: "20px auto" }}>
      <Grid item xs={12}>
        <Typography align="center" variant="h3" component="h2">
          Filters
        </Typography>
      </Grid>
      <Grid item xs={6} md={4} paddingLeft="0 !important">
        <Dropdown
          label="Species"
          handleChange={handleSpecieChange}
          array={species}
          value={specie}
        />
      </Grid>
      <Grid item xs={6} md={4} paddingRight="16px">
        <Dropdown
          label="Status"
          handleChange={handleStatusChange}
          array={statuses}
          value={status}
        />
      </Grid>
      <Grid item xs={12} md={4} paddingLeft="0 !important" paddingRight="16px">
        <Dropdown
          label="Gender"
          handleChange={handleGenderChange}
          array={genders}
          value={gender}
        />
      </Grid>
    </Grid>
  );
}
