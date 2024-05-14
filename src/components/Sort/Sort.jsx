import Select from "react-select";
import styles from "./Sort.module.scss";

const Sort = ({ onChange }) => {
  const options = [
    { value: "name", label: "Name", isFixed: true },
    { value: "date", label: "Date" },
    { value: "organizer", label: "Organizer" },
  ];

  return (
    <div className={styles.wrapper}>
      <Select
        className="basic-single"
        classNamePrefix="select"
        isClearable={true}
        name="select"
        options={options}
        onChange={onChange}
        isSearchable={false}
      />
    </div>
  );
};

export default Sort;
