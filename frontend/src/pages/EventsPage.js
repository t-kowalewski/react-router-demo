import { useLoaderData } from 'react-router-dom';

import EventsList from '../components/EventsList';

function EventsPage() {
  const fetchedEvents = useLoaderData();

  return (
    <>
      <EventsList events={fetchedEvents} />
    </>
  );
}

// Route loader to fetch data
export const loader = async () => {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    // .. error handling
  } else {
    const resData = await response.json();
    return resData.events;
  }
};

export default EventsPage;
