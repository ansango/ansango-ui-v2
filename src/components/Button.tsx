import { type FC } from "react";

type Props = {
  children?: React.ReactNode;
};

const Button: FC<Props> = ({ children }) => {
  return <div className="bg-primary btn">{children}</div>;
};

export default Button;
