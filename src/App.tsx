import "ag-grid-community/dist/styles/ag-grid.css"; // Ag-Gridの基本スタイル
import "ag-grid-community/dist/styles/ag-theme-alpine.css"; // テーマスタイル

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HeadTitle } from "./components/common/headTitle";
import { CurrentRoutes } from "./routes";

// type Car = {
//   make: string;
//   model: string;
//   price: number;
// };

// import { ICellEditorParams } from "ag-grid-community";
// import React, { useRef } from "react";

// export const TextCellEditor: React.FC<ICellEditorParams> = React.forwardRef(
//   (props, ref) => {
//     const [value, setValue] = useState<string>(props.value || "");
//     const inputRef = useRef<HTMLInputElement>(null);

//     useEffect(() => {
//       // 初期フォーカスを設定
//       if (inputRef.current) {
//         inputRef.current.focus();
//       }
//     }, []);

//     // 値を返すメソッド
//     React.useImperativeHandle(ref, () => ({
//       getValue() {
//         return value;
//       },
//     }));

//     return (
//       <input
//         ref={inputRef}
//         type="text"
//         value={value}
//         onChange={(e) => setValue(e.target.value)}
//         style={{ width: "100%" }}
//       />
//     );
//   }
// );

function App() {
  // const columnDefs = useMemo<ColDef[]>(
  //   () => [
  //     {
  //       field: "check",
  //       headerName: "",
  //       checkboxSelection: true,
  //       headerCheckboxSelection: true,
  //       width: 50,
  //     },
  //     { field: "make", headerName: "Make", flex: 1 },
  //     { field: "model", headerName: "Model", flex: 1 },
  //     { field: "price", headerName: "Price", flex: 1 },
  //     {
  //       field: "value",
  //       headerName: "Value",
  //       cellEditor: TextCellEditor,
  //       editable: true,
  //       flex: 1,
  //     },
  //   ],
  //   []
  // );
  // const rowData = useMemo<Car[]>(
  //   () => [
  //     { make: "Toyota", model: "Celica", price: 35000, value: "test" },
  //     { make: "Ford", model: "Mondeo", price: 32000, value: "test2" },
  //     { make: "Porsche", model: "Boxster", price: 72000, value: "test3" },
  //   ],
  //   []
  // );
  // return (
  //   <div className="ag-theme-alpine">
  //     <AgGridReact
  //       rowData={rowData}
  //       columnDefs={columnDefs}
  //       animateRows={true}
  //       domLayout="autoHeight"
  //       rowSelection="multiple"
  //     />
  //   </div>
  // );
  return (
    <BrowserRouter>
      <Routes>
        {CurrentRoutes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              <HeadTitle title={route.title}>
                <route.element />
              </HeadTitle>
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
