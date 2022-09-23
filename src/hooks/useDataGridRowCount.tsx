import { useEffect, useState } from "react";

export function useDataGridRowCount(
  countServer: number
): [number, (count: number) => void] {
  const [rowCountState, setRowCountState] = useState(countServer | 0);

  useEffect(() => {
    setRowCountState((prevRowCountState) =>
      countServer !== undefined ? countServer : prevRowCountState
    );
  }, [countServer, setRowCountState]);

  return [rowCountState, setRowCountState];
}
