import { ColDef } from "ag-grid-community"; // 必要なモジュールをインポート
import "ag-grid-community/dist/styles/ag-grid.css"; // Ag-Gridの基本スタイル
import "ag-grid-community/dist/styles/ag-theme-alpine.css"; // テーマスタイル
import { AgGridReact } from "ag-grid-react";

type Car = {
  make: string;
  model: string;
  price: number;
};

function App() {
  const columnDefs: ColDef[] = [
    { field: "make", headerName: "Make" },
    { field: "model", headerName: "Model" },
    { field: "price", headerName: "Price" },
  ];

  const rowData: Car[] = [
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxster", price: 72000 },
  ];

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="ag-theme-alpine"
        style={{ height: "400px", width: "600px" }}
      >
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          animateRows={true}
        />
      </div>
    </div>
  );
}

export default App;
