import css from "./GridItem.module.scss";

const GridItem = ({ children }) => {
  return <li className={css.item}>{children}</li>;
};

export default GridItem;
