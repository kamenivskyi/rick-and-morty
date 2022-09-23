import { Container } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { formatFromUTC } from "utils/date";
import { IEpisodesResultsItem } from "./episodesInterfaces";
import { getEpisodes, selectEpisode } from "./episodesSlice";
import { columns } from "./episodesData";

export default function EpisodesTable() {
  const episode = useAppSelector<any>(selectEpisode);
  const episodes = episode.results.map((item: IEpisodesResultsItem) => ({
    ...item,
    created: formatFromUTC(item.created),
  }));
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();

  const handlePageChange = (page: number) => {
    navigate(`?page=${page + 1}`);
  };

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
          rowCount={episode?.info?.count}
          rowsPerPageOptions={[20]}
          checkboxSelection={false}
          onPageChange={handlePageChange}
          paginationMode="server"
          sortingOrder={["desc", "asc"]}
          pagination
          autoHeight
        />
      </div>
    </Container>
  );
}
