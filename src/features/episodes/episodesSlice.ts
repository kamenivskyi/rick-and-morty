import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { initialResponse } from "app/config";
import { RootState } from "app/store";
import { fetchEpisodes } from "./episodesAPI";
import { IEpisodesState } from "./episodesInterfaces";

const initialState: IEpisodesState = {
  episodeData: {
    ...initialResponse,
    message: "",
  },
  status: "idle",
};

export const getEpisodes = createAsyncThunk(
  "episode/getEpisodes",
  async (stringifiedParams: string) => {
    const response = await fetchEpisodes(stringifiedParams);

    if (response.error) {
      return {
        ...initialResponse,
        message: response.error,
      };
    }
    return response;
  }
);

export const episodeSlice = createSlice({
  name: "episode",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getEpisodes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getEpisodes.fulfilled, (state, action) => {
        state.status = "idle";
        // console.log("action.payload: ", action.payload);
        state.episodeData = action.payload;
      })
      .addCase(getEpisodes.rejected, (state) => {
        state.status = "failed";
        console.log("REJECTED: ", state);
      });
  },
});

export const {} = episodeSlice.actions;

export const selectEpisode = (state: RootState) => state.episode.episodeData;
export const selectEpisodeStatus = (state: RootState) => state.episode.status;

export default episodeSlice.reducer;
