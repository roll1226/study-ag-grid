import { Link } from "@mui/material";
import {
  ColDef,
  ICellRendererParams,
  RowClickedEvent,
} from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { FC, useCallback, useMemo } from "react";

const GOOGLE_URL = "https://www.google.com/search?q=";

type Item = {
  id: number;
  name: string;
  link: string;
  price: number;
};

/**
 * リンクを表示するコンポーネント
 *
 * @param {{
 *   data: Item;
 *   value: string;
 * }} {
 *   data,
 *   value,
 * }
 * @return {JSX.Element}
 */
const LinkComponent: FC<ICellRendererParams> = ({
  data,
  value,
}: {
  data: Item;
  value: string;
}): JSX.Element => {
  return (
    <Link
      href={data.link}
      className="ag-link"
      target="_blank"
      rel="noopener noreferrer"
    >
      {value}
    </Link>
  );
};

export const LinkPage: FC = () => {
  const header = useMemo<ColDef[]>(
    () => [
      {
        field: "check",
        checkboxSelection: true,
        headerCheckboxSelection: true,
        width: 50,
      },
      { field: "id", headerName: "ID", flex: 1 },
      {
        field: "name",
        headerName: "Name",
        flex: 1,
        cellRenderer: LinkComponent,
      },
      { field: "price", headerName: "Price", flex: 1 },
    ],
    []
  );

  const gridData = useMemo<Item[]>(
    () => [
      { id: 1, name: "react", link: `${GOOGLE_URL}react`, price: 100 },
      { id: 2, name: "vue", link: `${GOOGLE_URL}vue`, price: 200 },
      { id: 3, name: "angler", link: `${GOOGLE_URL}angler`, price: 300 },
    ],
    []
  );

  const handleRowClick = useCallback((e: RowClickedEvent) => {
    if (e.event?.target instanceof HTMLElement) {
      const dom = e.event.target;
      if (dom.classList.contains("ag-link")) return;
    }

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
