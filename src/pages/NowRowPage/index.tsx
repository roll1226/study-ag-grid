import { ColDef } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { FC, useMemo } from "react";

type Item = {
  id: number;
  name: string;
  price: number;
};

export const NowRowPage: FC = () => {
  const header = useMemo<ColDef[]>(
    () => [
      { field: "id", headerName: "ID", flex: 1 },
      { field: "name", headerName: "Name", flex: 1 },
      { field: "price", headerName: "Price", flex: 1 },
    ],
    []
  );

  const gridData = useMemo<Item[]>(() => [], []);

  return (
    <div className="ag-theme-alpine">
      <AgGridReact
        rowData={gridData}
        columnDefs={header}
        domLayout="autoHeight"
        overlayNoRowsTemplate="データがありません"
      />
    </div>
  );
};
