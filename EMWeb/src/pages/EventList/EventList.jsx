import EventCard from "../../components/EventCard/EventCard.jsx";
import { getAllEvents } from "../../utils/EventDatabase.jsx";
import Navigation from "../../components/Navigation/Navigation.jsx";
import "./EventList.css";
import { useState, useEffect } from "react";

const EventList = () => {
  const [allEvents, setAllEvents] = useState([]);

  useEffect(() => {
    // Get all events (static + custom)
    const combinedEvents = getAllEvents();
    setAllEvents(combinedEvents);
  }, []);

  // Listen for when the component comes back into focus (e.g., when user navigates back)
  useEffect(() => {
    const handleFocus = () => {
      const combinedEvents = getAllEvents();
      setAllEvents(combinedEvents);
    };

    window.addEventListener('focus', handleFocus);
    return () => window.removeEventListener('focus', handleFocus);
  }, []);

  const renderEventCards = () => {
    return allEvents.map(({ id, date, heading, location, img }) => {
      return (
        <EventCard
          key={id}
          id={id}
          date={date}
          heading={heading}
          location={location}
          img={img}
        />
      );
    });
  };

  return (
    <div>
      <Navigation/>
      <div className="event-list-wrapper">
        <div className="event-list">
          {allEvents.length > 0 ? (
            renderEventCards()
          ) : (
            <p>No events available</p>
          )}
        </div>
      </div>
    </div>
  );
};
export default EventList;