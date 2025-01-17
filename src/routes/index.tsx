import { FC } from "react";
import { ApiPage } from "../pages/ApiPage";
import { CheckboxPage } from "../pages/CheckboxPage";
import { DefaultColDefPage } from "../pages/DefaultColDefPage";
import { HorizontalScrollPage } from "../pages/HorizontalScrollPage";
import { LinkPage } from "../pages/LinkPage";
import { NormalPage } from "../pages/NormalPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { NowRowPage } from "../pages/NowRowPage";
import { OnGridReadyPage } from "../pages/OnGridReadyPage";
import { PaginationPage } from "../pages/PaginationPage";
import { RowClickPage } from "../pages/RowClickPage";
import { StylePage } from "../pages/StylePage";

type CurrentRoutesType = {
  path: string;
  element: FC;
  title: string;
};

export const CurrentRoutes: CurrentRoutesType[] = [
  {
    path: "/",
    element: NormalPage,
    title: "Normal",
  },
  {
    path: "/horizontal-scroll",
    element: HorizontalScrollPage,
    title: "Horizontal Scroll",
  },
  {
    path: "/checkbox",
    element: CheckboxPage,
    title: "Checkbox",
  },
  {
    path: "/row-click",
    element: RowClickPage,
    title: "Row Click",
  },
  {
    path: "/link",
    element: LinkPage,
    title: "Link",
  },
  {
    path: "/now-row",
    element: NowRowPage,
    title: "Now Row",
  },
  {
    path: "/pagination",
    element: PaginationPage,
    title: "Pagination",
  },
  {
    path: "/style",
    element: StylePage,
    title: "Style",
  },
  {
    path: "/on-grid-ready",
    element: OnGridReadyPage,
    title: "On Grid Ready",
  },
  {
    path: "/default-col-def",
    element: DefaultColDefPage,
    title: "Default Col Def",
  },
  {
    path: "/api",
    element: ApiPage,
    title: "Api",
  },
  {
    path: "*",
    element: NotFoundPage,
    title: "404 Not Found",
  },
];
