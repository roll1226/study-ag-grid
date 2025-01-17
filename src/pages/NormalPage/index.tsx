import { ColDef } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { FC, useMemo } from "react";

type Item = {
  col1: string;
  col2: string;
  col3: number;
};

export const NormalPage: FC = () => {
  /**
   * field
   * 表示するデータを紐づいた列に表示する用
   */
  /**
   * headerName
   * 表示する列のヘッダー名
   */
  /**
   * flex
   * 列の幅の割合を指定する
   */
  const header = useMemo<ColDef[]>(
    () => [
      { field: "col1", headerName: "列1", flex: 1 },
      { field: "col2", headerName: "列2", flex: 1 },
      { field: "col3", headerName: "列3", flex: 1 },
    ],
    []
  );

  const gridData = useMemo<Item[]>(
    () => [
      { col1: "データ1 - col1", col2: "データ1 - col2", col3: 200 },
      { col1: "データ2 - col1", col2: "データ2 - col2", col3: 400 },
      { col1: "データ3 - col1", col2: "データ3 - col3", col3: 600 },
    ],
    []
  );

  return (
    <div className="ag-theme-alpine">
      <AgGridReact
        rowData={gridData}
        columnDefs={header}
        domLayout="autoHeight"
      />
    </div>
  );
};
