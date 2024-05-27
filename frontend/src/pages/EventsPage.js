import { useLoaderData } from 'react-router-dom';

import EventsList from '../components/EventsList';

function EventsPage() {
  const { events } = useLoaderData();

  return (
    <>
      <EventsList events={events} />
    </>
  );
}

// Route loader to fetch data
export const loader = async () => {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    // .. error handling
  } else {
    return response;
  }
};

export default EventsPage;
