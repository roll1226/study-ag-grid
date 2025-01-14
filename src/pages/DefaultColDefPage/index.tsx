import { ColDef } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { FC, useMemo } from "react";

type Item = {
  id: number;
  name: string;
  price: number;
};

const DEFAULT_COL_DEF: ColDef = {
  sortable: true,
  filter: true,
  resizable: true,
  flex: 1,
  width: 100,
  cellStyle: { textAlign: "right" },
};

export const DefaultColDefPage: FC = () => {
  const headers = useMemo<ColDef[]>(
    () => [
      { field: "id", headerName: "ID", flex: 1 },
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

  return (
    <div className="ag-theme-alpine">
      <AgGridReact
        rowData={gridData}
        columnDefs={headers}
        defaultColDef={DEFAULT_COL_DEF}
        domLayout="autoHeight"
      />
    </div>
  );
};
