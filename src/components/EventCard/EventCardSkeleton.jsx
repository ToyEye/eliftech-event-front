import GridItem from "../GridItem/GridItem";
import styles from "./EventCard.module.scss";

const EventCardSkeleton = () => {
  return (
    <GridItem>
      <div className={styles.skeletonWrapper}>
        <div className={`${styles.cardSkeleton} ${styles.skeletonTitle}`}></div>
        <div
          className={`${styles.cardSkeleton} ${styles.skeletonDescription}`}
        ></div>
      </div>
    </GridItem>
  );
};

export default EventCardSkeleton;
