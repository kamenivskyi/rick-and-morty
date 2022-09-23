import { CharachtersPage } from "features/charachters/CharachtersPage";
import { EpisodesPage } from "features/episodes/EpisodesPage";
import { LocationsPage } from "features/locations/LocationsPage";
import { NotFoundPage } from "features/notFound/NotFoundPage";
import { WatchListPage } from "features/watchList/WatchListPage";
import { Route, Routes } from "react-router-dom";

export const routes = (
  <Routes>
    <Route path="/" element={<CharachtersPage />} />
    <Route path="/episodes" element={<EpisodesPage />} />
    <Route path="/locations" element={<LocationsPage />} />
    <Route path="/watch-list" element={<WatchListPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);
