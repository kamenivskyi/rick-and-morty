import {
  Pagination,
  Typography,
  Container,
  Grid,
  PaginationItem,
} from "@mui/material";
import queryString from "query-string";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "app/hooks";
import {
  getCharachtersData,
  selectCharacter,
} from "features/charachters/charachtersSlice";
import { CharachtersFilters } from "./CharachtersFilters";
import { CharachterItem } from "./CharachterItem";
import CardModal from "ui/Modal";

interface ICharactersObject {
  info: any;
  results: any;
}

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
  const store = useAppSelector<any>(selectCharacter);
  const page = parseInt(query.get("page") || "1", 10);

  const dispatch = useAppDispatch();
  let queries = queryString.parse(location.search);

  console.log("store: ", store);

  useEffect(() => {
    dispatch(getCharachtersData(location.search));
  }, [dispatch, getCharachtersData, page, location.search]);

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

  return (
    <div>
      <Container maxWidth="lg">
        <CharachtersFilters />

        {store.message && !!store.message.length && (
          <Typography component="p" align="center">
            {store.message}
          </Typography>
        )}

        <Grid container>
          {store.results.map((item: ICharachter) => (
            <Grid item xs={12} md={6} lg={3} key={item.id}>
              <CharachterItem item={item} showAllData={openModalWithData} />
            </Grid>
          ))}
        </Grid>
        {!!store.results && !!store.results.length && (
          <Pagination
            count={store.info.pages}
            page={page}
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
    </div>
  );
}
