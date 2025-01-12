import Button from "@mui/material/Button";
import { ColDef } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { FC, useCallback, useMemo, useRef } from "react";

type Item = {
  id: number;
  name: string;
  price: number;
};

export const Checkbox: FC = () => {
  const girdRef = useRef<AgGridReact>(null);

  const header = useMemo<ColDef[]>(
    () => [
      {
        field: "check",
        headerName: "",
        checkboxSelection: true,
        headerCheckboxSelection: true,
        width: 50,
      },
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

  /**
   * 選択した行のIDを取得する
   * @returns {void}
   */
  const getSelectedRows = useCallback(() => {
    if (girdRef.current?.api) {
      const selectedRows = girdRef.current.api.getSelectedRows();
      if (selectedRows.length === 0) {
        alert("行が選択されていません");
      } else {
        alert(selectedRows.map((row) => JSON.stringify(row)).join(", "));
      }
    }
    // NOTE: エラーハンドリングが必要
  }, []);

  return (
    <div className="ag-theme-alpine">
      <AgGridReact
        ref={girdRef}
        rowData={gridData}
        columnDefs={header}
        domLayout="autoHeight"
        rowSelection="multiple"
      />
      <Button variant="contained" onClick={getSelectedRows}>
        選択した行のIDを取得
      </Button>
    </div>
  );
};
