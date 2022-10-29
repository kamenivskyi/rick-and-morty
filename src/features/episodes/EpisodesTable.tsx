import { useMemo } from "react";
import { Container } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { formatFromUTC } from "utils/date";
import { IEpisodesResponse, IEpisodesResultsItem } from "./episodesInterfaces";
import { getEpisodes, selectEpisode } from "./episodesSlice";
import { columns } from "./episodesConstants";
import { useDataGridRowCount, useQueriesPagination } from "hooks";
import { DEFAULT_PAGE_SIZE } from "app/config";

export default function EpisodesTable() {
  const episodeData = useAppSelector<IEpisodesResponse>(selectEpisode);
  const dispatch = useAppDispatch();

  const episodes = useMemo(() => {
    return episodeData.results
      ? episodeData.results.map((item: IEpisodesResultsItem) => ({
          ...item,
          created: formatFromUTC(item.created),
        }))
      : [];
  }, [episodeData.results]);

  const [rowCountState] = useDataGridRowCount(episodeData?.info?.count || 0);
  const { page, handlePageChange } = useQueriesPagination(
    "/episodes",
    episodeData.info?.pages
  );

  useEffect(() => {
    dispatch(getEpisodes(`?page=${page}`));
  }, [page, getEpisodes, dispatch]);

  return (
    <Container maxWidth="lg">
      <div style={{ margin: "20px auto" }}>
        <DataGrid
          rows={episodes}
          columns={columns}
          pageSize={DEFAULT_PAGE_SIZE}
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
