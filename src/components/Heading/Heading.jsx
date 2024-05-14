import css from "./Heading.module.scss";
import clsx from "clsx";

const Heading = ({ tag = "h2", text, type }) => {
  const style = clsx(
    css.title,
    { [css.mainTitle]: type === "main" },
    { [css.subTitle]: type === "subtitle" }
  );

  const Tag = tag;
  return <Tag className={style}>{text}</Tag>;
};

export default Heading;
