import { useEffect, useState } from "react";
import { getEvents } from "../service/api";
import EventList from "../components/EventList/EventList";
import Heading from "../components/Heading/Heading";
import Section from "../components/Section/Section";

const Home = () => {
  const [events, setEvents] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getData = async () => {
      const data = await getEvents(page);
      setEvents(data);
    };

    getData();
  }, [page]);

  return (
    <Section>
      <Heading tag="h1" text="Upcoming Events" type="main" />
      <EventList events={events} />
    </Section>
  );
};

export default Home;
