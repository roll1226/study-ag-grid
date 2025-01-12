import { FC } from "react";
import { Checkbox } from "../pages/Checkbox";
import { Normal } from "../pages/Normal";

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
];
