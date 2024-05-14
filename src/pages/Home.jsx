import { useEffect, useState } from "react";
import { getEvents } from "../service/api";
import EventList from "../components/EventList/EventList";
import Heading from "../components/Heading/Heading";
import Section from "../components/Section/Section";

import Sort from "../components/Sort/Sort";
import Text from "../components/Text/Text";

const Home = () => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);

  const [page, setPage] = useState(1);

  const [select, setSelect] = useState("name");

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getEvents(page);
        setEvents(data);
      } catch (error) {
        setError(error.message);
      }
    };

    getData();
  }, [page]);

  const onChange = (e) => {
    if (!e) return;
    setSelect(e.value);
  };

  const sortedList = [...events].sort((event1, event2) => {
    const selectedValue = select;

    switch (selectedValue) {
      case "name":
        return event1.title.localeCompare(event2.title);
      case "date":
        return new Date(event1.event_date) - new Date(event2.event_date);
      case "organizer":
        return event1.organizer.localeCompare(event2.organizer);
      default:
        return events;
    }
  });

  return (
    <Section>
      <Heading tag="h1" text="Upcoming Events" type="main" />
      {error && <Text text={error} as="error" />}

      {events.length && (
        <>
          <Sort onChange={onChange} />
          <EventList events={sortedList} />
        </>
      )}
    </Section>
  );
};

export default Home;
