import { Fragment } from "react";
import EventList from "../components/events/EventList";
import { getAllEvents, getFeaturedEvents } from "../data/dummy-data";

function EventHomePage() {
    const featureEvents = getFeaturedEvents();
    console.log(featureEvents);
    return (
        <Fragment>
            <h1>Event Home page</h1>
            <EventList eventItems={featureEvents}/>
            
        </Fragment>
    );
}

export default EventHomePage;
