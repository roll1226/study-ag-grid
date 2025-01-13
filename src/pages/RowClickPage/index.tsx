import { ColDef, RowClickedEvent } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { FC, useCallback, useMemo } from "react";

type Item = {
  id: number;
  name: string;
  price: number;
};

export const RowClickPage: FC = () => {
  const header = useMemo<ColDef[]>(
    () => [
      // NOTE: 行クリックとチェックボックスの共存が可能
      {
        field: "check",
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
   * 行がクリックされた時の処理
   * @param {RowClickedEvent} e
   * @returns {void}
   */
  const handleRowClick = useCallback((e: RowClickedEvent) => {
    const rowData = e.data as Item;
    alert(JSON.stringify(rowData));
  }, []);

  return (
    <div className="ag-theme-alpine">
      <AgGridReact
        rowData={gridData}
        columnDefs={header}
        domLayout="autoHeight"
        onRowClicked={handleRowClick}
      />
    </div>
  );
};
