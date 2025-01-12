import { FC } from "react";
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
];
