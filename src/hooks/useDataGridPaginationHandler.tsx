import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function useDataPaginationHandler(intitialURL: string): {
  page: number;
  handlePageChange: (count: number) => void;
} {
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const [page, setPage] = useState<number>(() =>
    parseInt(query.get("page") || "1", 10)
  );

  const handlePageChange = (page: number) => {
    setPage(page + 1);
  };

  useEffect(() => {
    const navigateToRightPage = (): void => {
      if (page === 1) {
        navigate(intitialURL);
      } else {
        navigate(`?page=${page}`);
      }
    };
    navigateToRightPage();
  }, [page]);

  return { page, handlePageChange };
}
