import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialResponse } from "app/config";
import { RootState } from "app/store";
import { InitialResponse } from "utils/fetchData";
import { ICharactersResponse, ICharactersState } from "./charachterInterface";
import { fetchCharachters } from "./charachtersAPI";

const initialState: ICharactersState = {
  charachters: initialResponse,
  error: "",
  status: "idle",
};

export const getCharachters = createAsyncThunk(
  "charachters/getCharachters",
  async (stringifiedParams: string) => {
    return await fetchCharachters<ICharactersResponse>(stringifiedParams);
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
      .addCase(
        getCharachters.fulfilled,
        (state, action: PayloadAction<ICharactersResponse>) => {
          state.error = action.payload.error || "";
          state.status = "idle";
          state.charachters = action.payload.results
            ? action.payload
            : initialResponse;
        }
      )
      .addCase(getCharachters.rejected, (state, action) => {
        state.status = "failed";
        state.charachters = initialResponse;
        state.error = action?.error?.message || "Something went wrong";
      });
  },
});

export const {} = charachterSlice.actions;

export const selectCharacter = (state: RootState) =>
  state.charachter.charachters;

export const selectCharacterError = (state: RootState) =>
  state.charachter.error;

export const selectCharacterStatus = (state: RootState) =>
  state.charachter.status;

export default charachterSlice.reducer;
