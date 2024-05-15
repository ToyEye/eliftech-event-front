import GridItem from "../GridItem/GridItem";
import Text from "../Text/Text";
import styles from "./ParticipantsCard.module.scss";

const ParticipantsCard = ({ fullName, email }) => {
  return (
    <GridItem>
      <div className={styles.wrapper}>
        <div className={styles.infoWrapper}>
          <Text text={fullName} />
          <Text text={email} />
        </div>
      </div>
    </GridItem>
  );
};

export default ParticipantsCard;
