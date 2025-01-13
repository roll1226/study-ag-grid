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
 */
const LinkComponent: FC<ICellRendererParams> = ({
  data,
  value,
}: {
  data: Item;
  value: string;
}): JSX.Element => {
  return (
    <a
      href={data.link}
      target="_blank"
      rel="noopener noreferrer"
      className="ag-link"
      style={{ color: "blue", textDecoration: "underline" }}
    >
      {value}
    </a>
  );
};

export const Link: FC = () => {
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

  /**
   * 行がクリックされた時の処理
   * @param {RowClickedEvent} e
   * @returns {void}
   */
  const handleRowClick = useCallback((e: RowClickedEvent) => {
    const dom = e.event?.target as HTMLElement;
    if (dom.classList.contains("ag-link")) return;

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
