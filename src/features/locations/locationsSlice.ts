import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { fetchLocations } from "./locationAPI";
import { ILocationState } from "./locationInterfaces";

const initialState: ILocationState = {
  locationData: {
    info: {},
    results: [],
    message: "",
  },
  status: "idle",
};

export const getLocations = createAsyncThunk(
  "location/getLocations",
  async (stringifiedParams: string) => {
    const response = await fetchLocations(stringifiedParams);
    console.log("response: ", response);

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

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getLocations.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getLocations.fulfilled, (state, action) => {
        state.status = "idle";
        // console.log("action.payload: ", action.payload);
        state.locationData = action.payload;
      })
      .addCase(getLocations.rejected, (state) => {
        state.status = "failed";
        console.log("REJECTED: ", state);
      });
  },
});

export const {} = locationSlice.actions;

export const selectLocation = (state: RootState) => state.location.locationData;

export default locationSlice.reducer;
