import { ColDef, ColumnApi, GridApi, GridReadyEvent } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { FC, useMemo, useRef } from "react";

type Item = {
  id: number;
  name: string;
  price: number;
};

export const OnGridReadyPage: FC = () => {
  const gridApiRef = useRef<GridApi | null>(null);
  const columnApiRef = useRef<ColumnApi | null>(null);

  const header = useMemo<ColDef[]>(
    () => [
      { field: "id", headerName: "ID" },
      { field: "name", headerName: "Name", flex: 1 },
      { field: "price", headerName: "Price", flex: 1 },
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

  const onGridReady = (params: GridReadyEvent) => {
    gridApiRef.current = params.api;
    columnApiRef.current = params.columnApi;

    params.columnApi.setColumnVisible("id", false);
  };

  return (
    <div className="ag-theme-alpine">
      <AgGridReact
        rowData={gridData}
        columnDefs={header}
        domLayout="autoHeight"
        onGridReady={onGridReady}
      />
    </div>
  );
};
