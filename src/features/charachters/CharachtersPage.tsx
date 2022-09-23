import {
  Pagination,
  Typography,
  Container,
  Grid,
  PaginationItem,
  CircularProgress,
} from "@mui/material";
import { ErrorBoundary } from "react-error-boundary";
import queryString from "query-string";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "app/hooks";
import {
  getCharachters,
  selectCharacter,
  selectCharacterStatus,
} from "features/charachters/charachtersSlice";
import { CharachtersFilters } from "./CharachtersFilters";
import { CharachterItem } from "./CharachterItem";
import CardModal from "ui/Modal";
import ErrorFallback from "components/ErrorFallback";

interface ICharachter {
  image: string;
  name: string;
  id: number;
  status: string;
}

export function CharachtersPage() {
  const [selected, setSelected] = useState(null);
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const charachterData = useAppSelector<any>(selectCharacter);
  const status = useAppSelector(selectCharacterStatus);
  const page = parseInt(query.get("page") || "1", 10);

  const dispatch = useAppDispatch();
  let queries = queryString.parse(location.search);

  useEffect(() => {
    dispatch(getCharachters(location.search));
  }, [dispatch, getCharachters, page, location.search]);

  const generateParams = (item: any) => {
    if (item.page === 1) {
      delete queries.page;

      if (!Object.keys(queries).length) {
        return "/";
      }
    } else {
      queries.page = item.page;
    }

    const stringified = queryString.stringify(queries);

    return "?" + stringified;
  };

  const openModalWithData = (data: any) => {
    console.log("show data: ", data);
    setSelected(data);
  };

  const shouldShowMessage =
    status === "idle" &&
    charachterData.message &&
    !!charachterData.message.length;

  console.log("status: ", status);

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Container maxWidth="lg">
        <CharachtersFilters />

        {shouldShowMessage && (
          <Typography component="p" align="center">
            {charachterData.message}
          </Typography>
        )}

        <Grid container>
          {status === "loading" && (
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                margin: "40px 0",
              }}
            >
              <CircularProgress />
            </Grid>
          )}
          {status === "idle" &&
            charachterData.results.map((item: ICharachter) => (
              <Grid item xs={12} md={6} lg={3} key={item.id}>
                <CharachterItem item={item} showAllData={openModalWithData} />
              </Grid>
            ))}
        </Grid>
        {!!charachterData.results && !!charachterData.results.length && (
          <Pagination
            count={charachterData.info.pages}
            page={page}
            disabled={status === "loading"}
            renderItem={(item) => (
              <PaginationItem
                component={Link}
                to={generateParams(item)}
                {...item}
              />
            )}
            sx={{
              margin: "10px auto 20px auto",
              display: "flex",
              justifyContent: "center",
            }}
          />
        )}
      </Container>
      {selected && (
        <CardModal
          data={selected}
          isOpen={!!selected}
          handleClose={() => setSelected(null)}
        />
      )}
    </ErrorBoundary>
  );
}
