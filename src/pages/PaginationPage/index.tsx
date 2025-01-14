import { ColDef } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { FC, useMemo } from "react";

type Item = {
  id: number;
  name: string;
  price: number;
};

export const PaginationPage: FC = () => {
  const header = useMemo<ColDef[]>(
    () => [
      {
        field: "check",
        checkboxSelection: true,
        headerCheckboxSelection: true,
        pinned: true,
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
      ...Array.from({ length: 100 }, (_, i) => ({
        id: i + 1,
        name: `Item ${i + 1}`,
        price: (i + 1) * 100,
      })),
    ],
    []
  );

  return (
    <div className="ag-theme-alpine">
      <AgGridReact
        rowData={gridData}
        columnDefs={header}
        domLayout="autoHeight"
        pagination={true}
        paginationPageSize={5}
      />
    </div>
  );
};
