import css from "./Grid.module.scss";

const Grid = ({ children }) => {
  return <ul className={css.list}>{children}</ul>;
};

export default Grid;
