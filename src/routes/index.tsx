import { FC } from "react";
import { Checkbox } from "../pages/Checkbox";
import { Normal } from "../pages/Normal";
import { NotFound } from "../pages/NotFound";

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
    path: "*",
    element: NotFound,
    title: "404 Not Found",
  },
];
