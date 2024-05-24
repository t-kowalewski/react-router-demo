import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './pages/RootLayout';
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import EventDetailsPage from './pages/EventDetailsPage';
import NewEventPage from './pages/NewEventPage';
import EditEventPage from './pages/EditEventPage';
import RootEventsLayout from './pages/RootEventsLayout';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: 'events',
          element: <RootEventsLayout />,
          children: [
            {
              index: true,
              element: <EventsPage />,
              loader: async () => {
                const response = await fetch('http://localhost:8080/events');

                if (!response.ok) {
                  // .. error handling
                } else {
                  const resData = await response.json();
                  return resData.events;
                }
              },
            },
            { path: ':eventId', element: <EventDetailsPage /> },
            { path: 'new', element: <NewEventPage /> },
            { path: ':eventId/edit', element: <EditEventPage /> },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
