import styles from "./Filter.module.scss";

const Filter = ({ onChange }) => {
  return (
    <>
      <input
        className={styles.input}
        type="text"
        name="filter"
        onChange={onChange}
        placeholder="Filter..."
      />
    </>
  );
};

export default Filter;
