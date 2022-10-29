import { useEffect, useState } from "react";
import { SelectChangeEvent, Grid, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import queryString, { ParsedQuery } from "query-string";
import Dropdown from "ui/Dropdown";
import {
  FILTERS,
  GENDERS_LIST,
  SPECIES_LIST,
  STATUSES_LIST,
} from "./charactersConstants";

export function CharachtersFilters() {
  const [filters, setFilters] = useState({
    species: FILTERS.DEFAULT_VALUES.SPECIES,
    status: FILTERS.DEFAULT_VALUES.STATUS,
    gender: FILTERS.DEFAULT_VALUES.GENDER,
  });
  const location = useLocation();
  const navigate = useNavigate();

  let queries: ParsedQuery<string> = queryString.parse(location.search);

  const handleChange = (value: string, propName: string) => {
    if (value === "all") {
      delete queries[propName];
    } else {
      queries[propName] = value;
    }

    navigate("/?" + queryString.stringify(queries), { replace: true });
  };

  useEffect(() => {
    function setFiltersFromQueryParams() {
      Object.entries(queries).forEach(([key, value]: string[] | any[]) => {
        setFilters((prevState) => ({ ...prevState, [key]: value }));
      });
    }
    setFiltersFromQueryParams();
  }, [location.search]);

  const handleFilterChange = ({ target }: SelectChangeEvent) => {
    handleChange(target.value, target.name);
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
          handleChange={handleFilterChange}
          array={SPECIES_LIST}
          name={FILTERS.SPECIES}
          value={filters.species}
        />
      </Grid>
      <Grid item xs={6} md={4} paddingRight="16px">
        <Dropdown
          label="Status"
          handleChange={handleFilterChange}
          array={STATUSES_LIST}
          name={FILTERS.STATUS}
          value={filters.status}
        />
      </Grid>
      <Grid item xs={12} md={4} paddingLeft="0 !important" paddingRight="16px">
        <Dropdown
          label="Gender"
          handleChange={handleFilterChange}
          array={GENDERS_LIST}
          name={FILTERS.GENDER}
          value={filters.gender}
        />
      </Grid>
    </Grid>
  );
}
