import { useRouter } from "next/router";
import { Fragment } from "react";
import { getEventById } from "../../data/dummy-data";

import EventSummary from "../../components/eventDetails/event-summary";
import EventContent from "../../components/eventDetails/event-content";
import EventLogistics from "../../components/eventDetails/event-logistics";
import ErrorAlert from "../../components/ui/error-alert/error-alert";

function EventDetail() {
    const router = useRouter();
    const eventDetail = getEventById(router.query.eventId);
    console.log(eventDetail);
    if (!eventDetail) {
        return (
            <Fragment>
                <ErrorAlert>
                    <p>No Event Found</p>
                </ErrorAlert>
            </Fragment>
        );
    }

    return (
        <Fragment>
            <EventSummary title={eventDetail.title} />
            <EventLogistics
                date={eventDetail.date}
                image={eventDetail.image}
                address={eventDetail.location}
                imageAlt={eventDetail.title}
            />
            <EventContent>
                <p>{eventDetail.description}</p>
            </EventContent>
        </Fragment>
    );
}

export default EventDetail;
