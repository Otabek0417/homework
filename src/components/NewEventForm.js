import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./NewEventForm.css";

function NewEventForm({ newEvents, closeModal }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("fargona");

  console.log("location", location);
  const resetInputs = () => {
    setTitle("");
    setDate("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const events = {
      title: title,
      date: date,
      location: location,
      id: uuidv4(),
    };
    console.log(events);
    newEvents(events);
    resetInputs();
  };
  return (
    <form onSubmit={handleSubmit} className="new-event-form">
      <label>
        <span>Event Title:</span>
        <input
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          value={title}
          required
        />
      </label>
      <label>
        <span>Event Date:</span>
        <input
          onChange={(e) => setDate(e.target.value)}
          type="date"
          value={date}
          required
        />
      </label>
      <label>
        Location:
        <select onChange={(e) => setLocation(e.target.value)}>
          <option value="fargona">Farg'ona</option>
          <option value="toshkent">Toshkent</option>
          <option value="andijon">Andijon</option>
        </select>
      </label>
      <button>Submit</button>
    </form>
  );
}

export default NewEventForm;
