import { CiCalendar } from "react-icons/ci";
import { CgOrganisation } from "react-icons/cg";
import { MdPeople } from "react-icons/md";

import Button from "../Button/Button";
import GridItem from "../GridItem/GridItem";

import style from "./EventCard.module.scss";
import Heading from "../Heading/Heading";

const EventCard = ({
  title,
  organizer,
  event_date,
  description,
  _id: id,
  participants = [],
}) => {
  return (
    <GridItem>
      <div className={style.cardDescr}>
        <div className={style.participants}>
          <MdPeople />
          {participants.length}
        </div>
        <div>
          <Heading tag="h3" text={title} type="subtitle" />
          <p>{description}</p>
        </div>
        <div className={style.dataInfoWrapper}>
          <div>
            <span className={style.dataInfo}>
              <CiCalendar />
              {event_date}
            </span>
          </div>
          <div>
            <span className={style.dataInfo}>
              <CgOrganisation />
              {organizer}
            </span>
          </div>
        </div>
      </div>
      <div className={style.card_footer}>
        <Button path={`event/${id}`} type="outline" text="View" />
        <Button
          path={`event/${id}/register`}
          type="fullfield"
          text="Register"
        />
      </div>
    </GridItem>
  );
};

export default EventCard;
