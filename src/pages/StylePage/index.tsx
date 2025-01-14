import { ColDef, ICellRendererParams } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { FC, useMemo } from "react";

type Item = {
  id: number;
  name: string;
  price: string;
};

const NameComponent: FC<ICellRendererParams> = (params) => (
  <div style={{ fontWeight: "bold", textAlign: "center" }}>{params.value}</div>
);

export const StylePage: FC = () => {
  const headers = useMemo<ColDef[]>(
    () => [
      {
        field: "check",
        checkboxSelection: true,
        headerCheckboxSelection: true,
        pinned: true,
        width: 50,
      },
      { field: "id", headerName: "ID", flex: 1 },
      {
        field: "name",
        headerName: "Name",
        flex: 1,
        cellRenderer: NameComponent,
      },
      {
        field: "price",
        headerName: "Price",
        flex: 1,
        cellStyle: { color: "red", textAlign: "right", fontWeight: "bold" },
      },
    ],
    []
  );

  const gridData = useMemo<Item[]>(
    () => [
      ...Array.from({ length: 50 }, (_, i) => ({
        id: i + 1,
        name: `Item ${i + 1}`,
        price: `${(i + 1) * 100}円`,
      })),
    ],
    []
  );

  return (
    <div className="ag-theme-alpine">
      <AgGridReact
        rowData={gridData}
        columnDefs={headers}
        domLayout="autoHeight"
        pagination={true}
        paginationPageSize={5}
      />
    </div>
  );
};
