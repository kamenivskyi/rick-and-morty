import { Container, Grid, Snackbar, Typography } from "@mui/material";

import React, { useState } from "react";
import { useWatchList } from "features/watchList/useWatchList";
import { WatchListItems } from "./WatchListItems";
import { WatchListAddForm } from "./WatchListAddForm";

export function WatchListPage() {
  const [input, setInput] = useState<string>("");
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("Successfully added");
  const { watchList, addNewItem, toggleCompleted, removeItem } = useWatchList();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (input.length > 3) {
      addNewItem(input);
      setSnackbarMessage("Successfully added");
      setShowSnackbar(true);
      setInput("");
    } else {
      setSnackbarMessage("Input length should be greater than 3 charachters");
      setShowSnackbar(true);
    }
    console.log("submit: ", input);
  };

  const handleRemoveItem = (id: string) => {
    setSnackbarMessage("Successfully deleted");
    removeItem(id);
    setShowSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setShowSnackbar(false);
  };
  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item xs={12}>
          <Typography
            variant="h6"
            component="h1"
            align="center"
            fontWeight={400}
            margin={"15px 0"}
          >
            Watch list
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <WatchListAddForm
            input={input}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </Grid>
        <Grid item xs={12} justifyContent="center">
          <WatchListItems
            items={watchList}
            handleRemoveItem={handleRemoveItem}
            toggleCompleted={toggleCompleted}
          />
        </Grid>
      </Grid>
      <Snackbar
        open={showSnackbar}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
        autoHideDuration={4000}
      />
    </Container>
  );
}
