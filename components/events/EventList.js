import EventItem from "./EventItem";

import classes from './event-list.module.css';

function EventList(props) {
    const { eventItems } = props;
    return (
        <ul className={classes.list}>
            {eventItems.map((data, index) => (
                <EventItem
                    title={data.title}
                    date={data.date}
                    location={data.location}
                    id={data.id}
                    image={data.image}
                    key={`Event-${index}`}
                />
            ))}
        </ul>
    );
}

export default EventList;
