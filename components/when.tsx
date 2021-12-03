import { ReactChild, ReactChildren } from "react";

type Props = {
  children: ReactChildren | ReactChild | Function;
  value: boolean;
};

export const When = ({ children, value }: Props) => {
  if (!value) return null;

  if (typeof children === "function") return children();
  return children;
};
