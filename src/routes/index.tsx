import { FC } from "react";
import { CheckboxPage } from "../pages/CheckboxPage";
import { LinkPage } from "../pages/LinkPage";
import { NormalPage } from "../pages/NormalPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { RowClickPage } from "../pages/RowClickPage";

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
    path: "*",
    element: NotFoundPage,
    title: "404 Not Found",
  },
];
