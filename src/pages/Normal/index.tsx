import { ColDef } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { FC, useMemo } from "react";

type Car = {
  make: string;
  model: string;
  price: number;
};

export const Normal: FC = () => {
  const header = useMemo<ColDef[]>(
    () => [
      { field: "make", headerName: "Make", flex: 1 },
      { field: "model", headerName: "Model", flex: 1 },
      { field: "price", headerName: "Price", flex: 1 },
    ],
    []
  );

  const gridData = useMemo<Car[]>(
    () => [
      { make: "Toyota", model: "Celica", price: 35000, value: "test" },
      { make: "Ford", model: "Mondeo", price: 32000, value: "test2" },
      { make: "Porsche", model: "Boxster", price: 72000, value: "test3" },
    ],
    []
  );

  return (
    <div className="ag-theme-alpine">
      <AgGridReact
        rowData={gridData}
        columnDefs={header}
        animateRows={true}
        domLayout="autoHeight"
        rowSelection="multiple"
      />
    </div>
  );
};
