import "./App.css";
import { useState } from "react";

// components
import Title from "./components/Title";
import Modal from "./components/Modal";
import EventList from "./components/EventList";
import NewEventForm from "./components/NewEventForm";

function App() {
  const [events, setEvents] = useState([]);
  const [show, setShow] = useState(true);
  const [showModal, setShowModal] = useState(false);
  // !Function
  const handleDelete = (id) => {
    // const filterEvents = events.filter((event) => {
    //   return event.id !== id;
    // });

    // setEvents(filterEvents);

    // setEvents(events.filter((event) => event.id !== id));

    setEvents((prev) => {
      return prev.filter((item) => {
        return item.id !== id;
      });
    });
  };
  const closeModal = () => {
    setShowModal(false);
  };
  function newEvents(event) {
    setEvents((prev) => {
      return [...prev, event];
    });
    setShowModal(false);
  }
  const title = "Otabek Kingdom👑 Events";
  const subtitle = "All events well be here:)";
  return (
    <div className="App">
      <Title title={title} subtitle={subtitle} />
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"} button
      </button>
      {show && <EventList events={events} handleDelete={handleDelete} />}

      {showModal && (
        <Modal closeModal={closeModal} isModeModal={true}>
          <NewEventForm newEvents={newEvents} closeModal={closeModal} />
        </Modal>
      )}
      <br />
      <button
        onClick={() => {
          setShowModal(true);
        }}
      >
        ShowModal
      </button>
    </div>
  );
}

export default App;
