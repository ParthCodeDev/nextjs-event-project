import { useRouter } from "next/router";
import { Fragment } from "react";
import EventList from "../../components/events/EventList";
import ResultsTitle from "../../components/results-title/results-title";
import ErrorAlert from "../../components/ui/error-alert/error-alert";
import Button from "../../components/ui/Button";

import { getFilteredEvents } from "../../data/dummy-data";

function EventSlugs() {
    const router = useRouter();
    const queryParams = router.query.event;
    let filteredEvents = [];

    if (!queryParams) {
        return <p>Loading...</p>;
    }
    const year = queryParams[0];
    const month = queryParams[1];
    if (isNaN(year) || isNaN(month)) {
        return <p>Year and month value should be in numbers</p>;
    }

    if (month < 1 && month > 12) {
        return <p>Month value should be between 1 & 12</p>;
    }

    filteredEvents = getFilteredEvents({ year, month });
    console.log("filteredEvents 111", filteredEvents);

    if (filteredEvents.length === 0) {
        return (
            <Fragment>
                <ErrorAlert>
                    <p>No event found for given year and month</p>
                </ErrorAlert>
                <div className='center'>
                    <Button link='/events'>Show All Events</Button>
                </div>
            </Fragment>
        );
    }
    console.log("filteredEvents", filteredEvents);

    const newDate = new Date(year, month - 1);

    return (
        <Fragment>
            <ResultsTitle date={newDate} />
            <EventList eventItems={filteredEvents} />
        </Fragment>
    );
}

export default EventSlugs;
