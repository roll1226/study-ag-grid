import { ColDef } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { FC, useMemo } from "react";

type Data = {
  col1: string;
  col2: string;
  col3: number;
};

export const HorizontalScrollPage: FC = () => {
  const header = useMemo<ColDef[]>(
    () => [
      { field: "col1", headerName: "列1", width: 200 },
      { field: "col2", headerName: "列2", width: 400 },
      { field: "col3", headerName: "列3", width: 600 },
    ],
    []
  );

  const gridData = useMemo<Data[]>(
    () => [
      { col1: "データ1 - col1", col2: "データ1 - col2", col3: 200 },
      { col1: "データ2 - col1", col2: "データ2 - col2", col3: 400 },
      { col1: "データ3 - col1", col2: "データ3 - col3", col3: 600 },
    ],
    []
  );

  return (
    <div
      className="ag-theme-alpine"
      style={{ width: "800px", height: "400px" }}
    >
      <AgGridReact rowData={gridData} columnDefs={header} />
    </div>
  );
};
