import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import charachterReducer from "features/charachters/charachtersSlice";
import episodeReducer from "features/episodes/episodesSlice";
import locationReducer from "features/locations/locationsSlice";

export const store = configureStore({
  reducer: {
    charachter: charachterReducer,
    episode: episodeReducer,
    location: locationReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
