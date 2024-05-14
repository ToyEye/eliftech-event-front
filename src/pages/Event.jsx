import { useParams } from "react-router-dom";
import Section from "../components/Section/Section";
import { useEffect, useState } from "react";
import { getEventParticipants } from "../service/api";
import ParticipantsList from "../components/Participants/ParticipantsList";
import Text from "../components/Text/Text";

const Event = () => {
  const [participants, setParticipants] = useState([]);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getEventParticipants(id);
        setParticipants(data.participants);
      } catch (error) {
        setError(error.message);
      }
    };
    getData();
  }, [id]);
  return (
    <Section>
      {participants && <ParticipantsList participants={participants} />}
      {error && <Text text={error} as="error" />}
      {!participants.length && !error && (
        <Text text="There are no participants for the meeting yet" as="text" />
      )}
    </Section>
  );
};

export default Event;
