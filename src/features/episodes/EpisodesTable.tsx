import { Container } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { formatFromUTC } from "utils/date";
import { IEpisodesObject, IEpisodesResultsItem } from "./episodesInterfaces";
import { getEpisodes, selectEpisode } from "./episodesSlice";
import { columns } from "./episodesData";
import { useDataGridRowCount, useDataPaginationHandler } from "hooks";

export default function EpisodesTable() {
  const episodeData = useAppSelector<IEpisodesObject>(selectEpisode);
  const episodes = episodeData.results.map((item: IEpisodesResultsItem) => ({
    ...item,
    created: formatFromUTC(item.created),
  }));
  const dispatch = useAppDispatch();
  const location = useLocation();

  const [rowCountState] = useDataGridRowCount(episodeData?.info?.count);
  const { page, handlePageChange } = useDataPaginationHandler("/episodes");

  useEffect(() => {
    dispatch(getEpisodes(location.search));
  }, [location.search, getEpisodes, dispatch]);

  return (
    <Container maxWidth="lg">
      <div style={{ margin: "20px auto" }}>
        <DataGrid
          rows={episodes}
          columns={columns}
          pageSize={20}
          rowCount={rowCountState}
          rowsPerPageOptions={[20]}
          checkboxSelection={false}
          onPageChange={handlePageChange}
          paginationMode="server"
          sortingOrder={["desc", "asc"]}
          page={page - 1}
          pagination
          autoHeight
        />
      </div>
    </Container>
  );
}
