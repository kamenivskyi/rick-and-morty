import { Container } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { formatFromUTC } from "utils/date";
import { useDataGridRowCount, useDataPaginationHandler } from "hooks";
import { ILocationResultsItem } from "./locationInterfaces";
import { getLocations, selectLocation } from "./locationsSlice";
import { columns } from "./locationsData";

export default function LocationsTable() {
  const locationsData = useAppSelector<any>(selectLocation);
  const locations = locationsData.results.map((item: ILocationResultsItem) => ({
    ...item,
    created: formatFromUTC(item.created),
  }));
  const dispatch = useAppDispatch();
  const location = useLocation();

  const { page, handlePageChange } = useDataPaginationHandler("/locations");
  const [rowCountState] = useDataGridRowCount(locationsData?.info?.count);

  useEffect(() => {
    dispatch(getLocations(location.search));
  }, [location.search, getLocations, dispatch]);

  return (
    <Container maxWidth="lg">
      <div style={{ margin: "20px auto" }}>
        <DataGrid
          rows={locations}
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
