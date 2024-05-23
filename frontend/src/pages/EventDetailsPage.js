import { useParams } from 'react-router-dom';

const EventDetailsPage = () => {
  const params = useParams();

  return (
    <>
      <h1>Event Details</h1>
      <p>{params.eventId}</p>
    </>
  );
};

export default EventDetailsPage;
