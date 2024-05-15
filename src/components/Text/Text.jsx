import clsx from "clsx";
import styles from "./Text.module.scss";

const Text = ({ text, as }) => {
  const style = clsx(
    { [styles.error]: as === "error" },
    { [styles.primary]: as === "primary" },
    { [styles.secondary]: as === "secondary" }
  );

  return <p className={style}>{text}</p>;
};

export default Text;
