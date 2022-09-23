import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IResponseInfo } from "interfaces";
import { RootState } from "app/store";
import { fetchCharachters } from "./charachtersAPI";

interface ICharacterArrayItem {
  id: number;
  name: string;
  species: string;
  type: string;
  status: string;
  image: string;
}

export interface ICharactersState {
  charachters: {
    info: IResponseInfo | Object;
    results: Array<ICharacterArrayItem>;
    message: string;
  };
  status: "idle" | "loading" | "failed";
}

const initialState: ICharactersState = {
  charachters: {
    info: {},
    results: [],
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
        info: {},
        results: [],
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
        // console.log("action.payload: ", action.payload);
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
