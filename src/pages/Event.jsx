import { useParams } from "react-router-dom";
import Section from "../components/Section/Section";
import { useEffect, useState } from "react";
import { getEventParticipants } from "../service/api";
import ParticipantsList from "../components/Participants/ParticipantsList";

const Event = () => {
  const [participants, setParticipants] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getEventParticipants(id);
        setParticipants(data.participants);
      } catch (error) {
        console.log(error.message);
      }
    };
    getData();
  }, [id]);
  return (
    <Section>
      {participants && <ParticipantsList participants={participants} />}
    </Section>
  );
};

export default Event;
