import GridItem from "../GridItem/GridItem";
import styles from "./ParticipantsCard.module.scss";

const ParticipantsCard = ({ fullName, email }) => {
  console.log({ fullName, email });
  return (
    <GridItem>
      <div className={styles.wrapper}>
        <p className={styles.img}>
          {fullName
            .split(" ")
            .map((word) => word.charAt(0))
            .join("")}
        </p>
        <div className={styles.infoWrapper}>
          <p>{fullName}</p>
          <p>{email}</p>
        </div>
      </div>
    </GridItem>
  );
};

export default ParticipantsCard;
