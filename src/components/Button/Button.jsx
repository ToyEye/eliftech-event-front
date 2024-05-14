import { Link } from "react-router-dom";
import clsx from "clsx";

import css from "./Button.module.scss";

const Button = ({ path, text, type }) => {
  const style = clsx(
    css.button,
    { [css.outline]: type === "outline" },
    { [css.fullfield]: type === "fullfield" }
  );

  return (
    <Link to={path} className={style}>
      {text}
    </Link>
  );
};

export default Button;
