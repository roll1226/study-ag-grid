import { FC, ReactNode, useEffect } from "react";

type HeadTitleProps = {
  title: string;
  children: ReactNode;
};

export const HeadTitle: FC<HeadTitleProps> = ({ children, title }) => {
  useEffect(() => {
    document.title = `AG Grid - ${title}`;
  }, [title]);

  return <>{children}</>;
};
