import EventCard from "../EventCard/EventCard";
import Grid from "../Grid/Grid";

const EventList = ({ events = [] }) => {
  return (
    <Grid>
      {events.map((event) => (
        <EventCard key={event.id} {...event} />
      ))}
    </Grid>
  );
};

export default EventList;
