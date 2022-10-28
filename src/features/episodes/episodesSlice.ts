import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialResponse } from "app/config";
import { RootState } from "app/store";
import { fetchEpisodes } from "./episodesAPI";
import { IEpisodesResponse, IEpisodesState } from "./episodesInterfaces";

const initialState: IEpisodesState = {
  episodeData: initialResponse,
  error: "",
  status: "idle",
};

export const getEpisodes = createAsyncThunk(
  "episode/getEpisodes",
  async (stringifiedParams: string) => {
    return await fetchEpisodes<IEpisodesResponse>(stringifiedParams);
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
      .addCase(
        getEpisodes.fulfilled,
        (state, action: PayloadAction<IEpisodesResponse>) => {
          state.status = "idle";
          state.error = action.payload.error || "";
          state.episodeData =
            action.payload.results && action.payload.info
              ? action.payload
              : initialResponse;
        }
      )
      .addCase(getEpisodes.rejected, (state, action) => {
        state.status = "failed";
        state.episodeData = initialResponse;
        state.error = action?.error?.message || "Something went wrong";
      });
  },
});

export const {} = episodeSlice.actions;

export const selectEpisode = (state: RootState) => state.episode.episodeData;
export const selectEpisodeStatus = (state: RootState) => state.episode.status;
export const selectEpisodeError = (state: RootState) => state.episode.error;

export default episodeSlice.reducer;
