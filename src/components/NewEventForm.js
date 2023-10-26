import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./NewEventForm.css";

function NewEventForm({ newEvents, closeModal }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const resetInput = () => {
    setTitle("");
    setDate("");
  };
  function handleSubmit(e) {
    e.preventDefault();
    let event = {
      title: title,
      date: date,
      id: uuidv4(),
    };
    resetInput();
    newEvents(event);
  }
  return (
    <form className="new-event-form" onSubmit={handleSubmit}>
      <label>
        Event Title:
        <input
          onChange={(e) => setTitle(e.target.value.trim())}
          type="text"
          value={title}
        />
      </label>
      <label>
        Event Date:
        <input
          onChange={(e) => setDate(e.target.value.trim())}
          type="date"
          value={date}
        />
      </label>
      <button onClick={() => resetInput()} type="button">
        Clear input
      </button>
      <br />
      <br />
      <button>Submit</button>
      <p>Title:{title}</p>
      <p>Date:{date}</p>
    </form>
  );
}

export default NewEventForm;
