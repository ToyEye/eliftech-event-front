import Grid from "../Grid/Grid";
import ParticipantsCard from "../ParticipantsCard/ParticipantsCard";

const ParticipantsList = ({ participants = [] }) => {
  return (
    <Grid>
      {participants.map((participant) => (
        <ParticipantsCard key={participant._id} {...participant} />
      ))}
    </Grid>
  );
};

export default ParticipantsList;
