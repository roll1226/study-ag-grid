import { FC } from "react";
import { Checkbox } from "../pages/Checkbox";
import { Link } from "../pages/Link";
import { Normal } from "../pages/Normal";
import { NotFound } from "../pages/NotFound";
import { RowClick } from "../pages/RowClick";

type CurrentRoutesType = {
  path: string;
  element: FC;
  title: string;
};

export const CurrentRoutes: CurrentRoutesType[] = [
  {
    path: "/",
    element: Normal,
    title: "Normal",
  },
  {
    path: "/checkbox",
    element: Checkbox,
    title: "Checkbox",
  },
  {
    path: "/row-click",
    element: RowClick,
    title: "Row Click",
  },
  {
    path: "/link",
    element: Link,
    title: "Link",
  },
  {
    path: "*",
    element: NotFound,
    title: "404 Not Found",
  },
];
