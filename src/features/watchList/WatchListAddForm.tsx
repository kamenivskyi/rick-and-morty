import { Button, Grid, TextField } from "@mui/material";
import React from "react";

interface IProps {
  input: string;
  handleSubmit: (e: React.FormEvent) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export function WatchListAddForm({
  handleSubmit,
  handleChange,
  input,
}: IProps) {
  console.log("VL ", input);
  return (
    <form onSubmit={handleSubmit}>
      <Grid container alignItems={"flex-start"} justifyContent="center">
        <Grid item>
          <TextField
            value={input}
            onChange={handleChange}
            label="Add to watch list"
            variant="outlined"
            inputProps={{ maxLength: 128 }}
            error={input.length && input.length < 4 ? true : false}
            helperText="Input length should be greater than 3 charachters"
            size="small"
            required
          />
        </Grid>
        <Grid item>
          <Button
            sx={{ marginLeft: "20px", marginTop: "2px" }}
            variant="contained"
            type="submit"
          >
            Add
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
