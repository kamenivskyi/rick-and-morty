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

export const getCharachtersData = createAsyncThunk(
  "charachters/getCharachtersData",
  async (stringifiedParams: string) => {
    console.log("stringifiedParams: ", stringifiedParams);
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
      .addCase(getCharachtersData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCharachtersData.fulfilled, (state, action) => {
        state.status = "idle";
        // console.log("action.payload: ", action.payload);
        state.charachters = action.payload;
      })
      .addCase(getCharachtersData.rejected, (state) => {
        state.status = "failed";
        console.log("REJECTED: ", state);
      });
  },
});

export const {} = charachterSlice.actions;

export const selectCharacter = (state: RootState) =>
  state.charachter.charachters;

export default charachterSlice.reducer;
