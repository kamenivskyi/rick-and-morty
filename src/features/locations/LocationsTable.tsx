import { useMemo } from "react";
import { Container } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { formatFromUTC } from "utils/date";
import { useDataGridRowCount, useQueriesPagination } from "hooks";
import { ILocationResultsItem, ILocationsResponce } from "./locationInterfaces";
import {
  getLocations,
  selectLocation,
  selectLocationError,
} from "./locationsSlice";
import { columns } from "./locationsConstants";
import { DEFAULT_PAGE_SIZE } from "app/config";

export default function LocationsTable() {
  const locationsData = useAppSelector<ILocationsResponce>(selectLocation);
  const dispatch = useAppDispatch();
  const location = useLocation();

  const { page, handlePageChange } = useQueriesPagination(
    "/locations",
    locationsData.info?.pages
  );
  const [rowCountState] = useDataGridRowCount(locationsData?.info?.count || 0);

  const locations = useMemo(() => {
    return locationsData.results
      ? locationsData.results.map((item: ILocationResultsItem) => ({
          ...item,
          created: formatFromUTC(item.created),
        }))
      : [];
  }, [locationsData.results]);

  useEffect(() => {
    dispatch(getLocations(`?page=${page}`));
  }, [page, getLocations, dispatch]);

  return (
    <Container maxWidth="lg">
      <div style={{ margin: "20px auto" }}>
        <DataGrid
          rows={locations}
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
