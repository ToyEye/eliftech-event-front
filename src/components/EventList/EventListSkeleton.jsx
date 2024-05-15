import Grid from "../Grid/Grid";
import EventCardSkeleton from "../EventCard/EventCardSkeleton";

const EventListSkeleton = () => {
  return (
    <Grid>
      {Array(9)
        .fill(null)
        .map((d, i) => (
          <EventCardSkeleton key={i} />
        ))}
    </Grid>
  );
};

export default EventListSkeleton;
