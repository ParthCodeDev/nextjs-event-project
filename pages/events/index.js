import { Fragment } from "react";

import { getAllEvents } from "../../data/dummy-data";
import EventList from "../../components/events/EventList";
import EventSearch from "../../components/events/events-search";
import { useRouter } from "next/router";

function EventListPage() {
    const events = getAllEvents();
    const route = useRouter();

    function getSearch(year,month) {
        console.log('year and moth', {year, month});
        route.push(`/events/${year}/${month}`);

    }
    return (
        <Fragment>
            <h1>Event List</h1>
            <EventSearch onSearch={getSearch}/>
            <EventList eventItems={events} />
        </Fragment>
    );
}

export default EventListPage;
