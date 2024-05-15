import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Fuse from "fuse.js";

import ParticipantsList from "../components/Participants/ParticipantsList";
import Section from "../components/Section/Section";
import Text from "../components/Text/Text";
import Filter from "../components/Filter/Filter";

import { getEventParticipants } from "../service/api";
import Diagram from "../components/Diagram/Diagram";

const Event = () => {
  const [participants, setParticipants] = useState([]);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("");

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

  const onChange = (e) => {
    setFilter(e.target.value);
  };

  const filtered = () => {
    if (!filter) return participants;

    const options = {
      keys: ["fullName", "email"],
      threshold: 0.3,
    };

    const fuse = new Fuse(participants, options);
    const result = fuse.search(filter);

    return result.map((item) => item.item);
  };

  return (
    <Section>
      <Filter onChange={onChange} />
      {participants.length > 0 && (
        <>
          <ParticipantsList participants={filtered()} />
          <Diagram participants={filtered()} />
        </>
      )}
      {error && <Text text={error} as="error" />}
      {!participants.length && !error && (
        <Text text="There are no participants for the meeting yet" as="text" />
      )}
    </Section>
  );
};

export default Event;
