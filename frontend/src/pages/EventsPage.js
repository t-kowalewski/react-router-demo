import { Link } from 'react-router-dom';
// import EventsList from '../components/EventsList';

const EVENTS = [
  { id: 'e1', title: 'Event 1' },
  { id: 'e2', title: 'Event 2' },
  { id: 'e3', title: 'Event 3' },
];

const EventsPage = () => {
  return (
    <>
      <h1>Events</h1>

      <ul>
        {EVENTS.map((event) => {
          return (
            <li key={event.id}>
              <Link to={event.id}>{event.title}</Link>
            </li>
          );
        })}
      </ul>

      {/* <EventsList /> */}
    </>
  );
};

export default EventsPage;
