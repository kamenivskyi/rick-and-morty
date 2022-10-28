import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function useQueriesPagination(
  intitialURL: string,
  totalPages: number = 0
): {
  page: number;
  handlePageChange: (count: number) => void;
} {
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const [page, setPage] = useState<number>(() => {
    const currentPage = parseInt(query.get("page") || "1", 10);
    if (currentPage > totalPages && totalPages > 0) {
      return totalPages;
    }

    return currentPage;
  });

  const handlePageChange = (page: number) => {
    if (page === 0) {
      navigate(intitialURL);
    } else {
      navigate(`?page=${page + 1}`);
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const currentPage = parseInt(params.get("page") || "1", 10);

    if (currentPage > totalPages && totalPages > 0) {
      setPage(totalPages);
    } else {
      setPage(currentPage);
    }
  }, [location.search, totalPages]);

  return { page, handlePageChange };
}
