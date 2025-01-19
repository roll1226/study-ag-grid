import { Button } from "@mui/material";
import { ColDef, Column } from "ag-grid-community";
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
        headerCheckboxSelection: true,
        checkboxSelection: true,
        headerCheckboxSelectionFilteredOnly: true,
        minWidth: 50,
      },
      {
        field: "id",
        colId: "id",
        headerName: "ID",
        flex: 1,
      },
      {
        field: "name",
        colId: "name",
        headerName: "Name",
        flex: 1,
      },
      {
        field: "price",
        colId: "price",
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

  const movePriceColumn = useCallback(() => {
    if (gridRef.current?.api) {
      const column = gridRef.current.columnApi.getColumn("price") as Column;
      gridRef.current.columnApi.moveColumn(column, 0);
    }
  }, [gridRef]);

  const selectAllRows = useCallback(() => {
    if (gridRef.current?.api) {
      gridRef.current.api.selectAll();
    }
  }, [gridRef]);

  const updateRowData = useCallback(() => {
    if (gridRef.current?.api) {
      const updateData = [] as Item[];
      // NOTE: これを動作させないと動かない？
      gridRef.current.api.forEachNodeAfterFilterAndSort(
        (detailGridInfo, index) => {
          const data = detailGridInfo.data as Item;
          console.log(data);

          if (index === 0) {
            data.price = 500;
            updateData.push(data);
          }
        }
      );
      gridRef.current.api.applyTransaction({
        update: updateData,
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

      <Button variant="contained" onClick={movePriceColumn}>
        価格列を移動
      </Button>

      <Button variant="contained" onClick={updateRowData}>
        行を更新
      </Button>

      <Button variant="contained" onClick={selectAllRows}>
        全行選択
      </Button>
    </div>
  );
};
