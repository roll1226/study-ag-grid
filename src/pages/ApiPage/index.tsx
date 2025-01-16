import { Button } from "@mui/material";
import { ColDef } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { FC, useCallback, useMemo, useRef } from "react";

type Item = {
  id: number;
  name: string;
  price: number;
};

export const ApiPage: FC = () => {
  const gridRef = useRef<AgGridReact>(null);
  const headers = useMemo<ColDef[]>(
    () => [
      {
        field: "id",
        headerName: "ID",
        flex: 1,
      },
      {
        field: "name",
        headerName: "Name",
        flex: 1,
      },
      {
        field: "price",
        headerName: "Price",
        flex: 1,
      },
    ],
    []
  );

  const gridData = useMemo<Item[]>(
    () => [
      { id: 1, name: "Item 1", price: 100 },
      { id: 2, name: "Item 2", price: 200 },
      { id: 3, name: "Item 3", price: 300 },
    ],
    []
  );

  const exportCsv = useCallback(() => {
    if (gridRef.current?.api) {
      gridRef.current.api.exportDataAsCsv();
    }
  }, [gridRef]);

  const applyTransaction = useCallback(() => {
    if (gridRef.current?.api) {
      gridRef.current.api.applyTransaction({
        add: [
          {
            id: 4,
            name: "Item 4",
            price: 400,
          },
        ],
      });
    }
  }, [gridRef]);

  return (
    <div className="ag-theme-alpine">
      <AgGridReact
        rowData={gridData}
        columnDefs={headers}
        ref={gridRef}
        domLayout="autoHeight"
      />
      <Button variant="contained" onClick={exportCsv}>
        CSV
      </Button>

      <Button variant="contained" onClick={applyTransaction}>
        行を追加
      </Button>
    </div>
  );
};
