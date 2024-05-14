import { Link } from "react-router-dom";
import clsx from "clsx";

import css from "./Button.module.scss";

const Button = ({ path, text, type, as, title = "" }) => {
  const style = clsx(
    css.button,
    { [css.outline]: type === "outline" },
    { [css.fullfield]: type === "fullfield" }
  );

  if (as === "button") {
    return (
      <button type="submit" className={style}>
        {text}{" "}
      </button>
    );
  }

  return (
    <Link to={path} className={style} state={{ title }}>
      {text}
    </Link>
  );
};

export default Button;
