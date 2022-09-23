import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "features/counter/counterSlice";
import charachterReducer from "features/charachters/charachtersSlice";
import episodeReducer from "features/episodes/episodesSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    charachter: charachterReducer,
    episode: episodeReducer,
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
