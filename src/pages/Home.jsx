import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import EventList from "../components/EventList/EventList";
import Heading from "../components/Heading/Heading";
import Section from "../components/Section/Section";
import Sort from "../components/Sort/Sort";
import Text from "../components/Text/Text";

import { getEvents } from "../service/api";
import { notify } from "../helpers/helpers";
import EventListSkeleton from "../components/EventList/EventListSkeleton";

const Home = () => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(false);
  const [select, setSelect] = useState("name");
  const [loading, setIsloading] = useState(false);

  const [ref, inView] = useInView({
    threshold: 1,
  });

  useEffect(() => {
    const getData = async () => {
      setIsloading(true);
      try {
        const data = await getEvents(page);
        setEvents((prevEvents) => [...prevEvents, ...data.events]);

        const isLoadmore = page < Math.ceil(data.totalEvents / 9);

        setTotalPages(isLoadmore);
        if (!isLoadmore) {
          notify("Events are over");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsloading(false);
      }
    };

    getData();
  }, [page]);

  useEffect(() => {
    if (inView) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [inView]);

  useEffect(() => {
    setPage(1);
  }, [select]);

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

      {events.length > 0 && (
        <>
          <Sort onChange={onChange} />
          <EventList events={sortedList} />
          {totalPages && <div ref={ref}></div>}
        </>
      )}
      {loading && <EventListSkeleton />}
    </Section>
  );
};

export default Home;
