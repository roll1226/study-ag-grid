import { ColDef } from "ag-grid-community"; // 必要なモジュールをインポート
import "ag-grid-community/dist/styles/ag-grid.css"; // Ag-Gridの基本スタイル
import "ag-grid-community/dist/styles/ag-theme-alpine.css"; // テーマスタイル
import { AgGridReact } from "ag-grid-react";
import { useEffect, useMemo, useState } from "react";

type Car = {
  make: string;
  model: string;
  price: number;
};

import { ICellEditorParams } from "ag-grid-community";
import React, { useRef } from "react";

export const TextCellEditor: React.FC<ICellEditorParams> = React.forwardRef(
  (props, ref) => {
    const [value, setValue] = useState<string>(props.value || "");
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
      // 初期フォーカスを設定
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, []);

    // 値を返すメソッド
    React.useImperativeHandle(ref, () => ({
      getValue() {
        return value;
      },
    }));

    return (
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{ width: "100%" }}
      />
    );
  }
);

function App() {
  const [gridWidth, setGridWidth] = useState(600); // 初期幅

  const columnDefs = useMemo<ColDef[]>(
    () => [
      {
        field: "check",
        headerName: "",
        checkboxSelection: true,
        headerCheckboxSelection: true,
        width: 50,
      },
      { field: "make", headerName: "Make" },
      { field: "model", headerName: "Model" },
      { field: "price", headerName: "Price" },
      {
        field: "value",
        headerName: "Value",
        cellEditor: TextCellEditor,
        editable: true,
      },
    ],
    []
  );

  const rowData = useMemo<Car[]>(
    () => [
      { make: "Toyota", model: "Celica", price: 35000, value: "test" },
      { make: "Ford", model: "Mondeo", price: 32000, value: "test2" },
      { make: "Porsche", model: "Boxster", price: 72000, value: "test3" },
    ],
    []
  );

  useEffect(() => {
    // 各列の幅を200pxとして計算
    const columnWidth = 200;
    setGridWidth(50 + (columnDefs.length - 1) * columnWidth);
  }, [columnDefs]);

  return (
    <div
      className="ag-theme-alpine"
      style={{
        height: "100vh",
        width: `${gridWidth}px`, // 列数に応じて幅を動的に設定
      }}
    >
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        animateRows={true}
        domLayout="autoHeight"
        rowSelection="multiple"
      />
    </div>
  );
}

export default App;
