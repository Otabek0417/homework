import style from "./EventList.module.css";
function EventList({ events, handleDelete }) {
  return (
    <div>
      {events.length === 0 && <h3>Not content yet :)</h3>}
      {events.map((event) => {
        return (
          <div className={style["card"]} key={event.id}>
            <h1>{event.title}</h1>
            <p>{event.date}</p>
            <button onClick={() => handleDelete(event.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default EventList;
