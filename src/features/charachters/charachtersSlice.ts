import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { initialResponse } from "app/config";
import { RootState } from "app/store";
import { ICharactersState } from "./charachterInterface";
import { fetchCharachters } from "./charachtersAPI";

const initialState: ICharactersState = {
  charachters: {
    ...initialResponse,
    message: "",
  },
  status: "idle",
};

export const getCharachters = createAsyncThunk(
  "charachters/getCharachters",
  async (stringifiedParams: string) => {
    const response = await fetchCharachters(stringifiedParams);

    if (response.error) {
      return {
        ...initialResponse,
        message: response.error,
      };
    }
    return response;
  }
);

export const charachterSlice = createSlice({
  name: "charachter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCharachters.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCharachters.fulfilled, (state, action) => {
        state.status = "idle";
        state.charachters = action.payload;
      })
      .addCase(getCharachters.rejected, (state) => {
        state.status = "failed";
        console.log("REJECTED: ", state);
      });
  },
});

export const {} = charachterSlice.actions;

export const selectCharacter = (state: RootState) =>
  state.charachter.charachters;

export const selectCharacterStatus = (state: RootState) =>
  state.charachter.status;

export default charachterSlice.reducer;
