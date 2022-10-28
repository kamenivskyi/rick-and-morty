import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { initialResponse } from "app/config";
import { RootState } from "app/store";
import { fetchLocations } from "./locationAPI";
import { ILocationsResponce, ILocationState } from "./locationInterfaces";

const initialState: ILocationState = {
  locationData: initialResponse,
  error: "",
  status: "idle",
};

export const getLocations = createAsyncThunk(
  "location/getLocations",
  async (stringifiedParams: string) => {
    return await fetchLocations<ILocationsResponce>(stringifiedParams);
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
export const selectLocationError = (state: RootState) => state.location.error;

export default locationSlice.reducer;
