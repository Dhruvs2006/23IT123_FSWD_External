import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function EventList() {
  let [events, setevents] = useState([
    { event: "Smile Fiesta", id: uuidv4(), isDone: false },
  ]);
  let [newevents, setNewevents] = useState([""]);

  let addNewEvent = () => {
    setevents((prevevent) => {
      return [...prevevent, { event: newevents, id: uuidv4(), isDone: false }];
    });
    setNewevents("");
  };

  let updateValue = (event) => {
    setNewevents(event.target.value);
  };

  let deleteevent = (id) => {
    setevents((prevevents) =>
      events.filter((prevevents) => prevevents.id != id)
    );
  };

  let eventDone = (id) => {
    setevents(
      events.map((prevevent) => {
        if (prevevent.id == id) {
          return {
            ...prevevent,
            isDone: true,
          };
        } else {
          return prevevent;
        }
      })
    );
  };

  let allDone = () => {
    setevents((prevevent) =>
      events.map((prevevent) => {
        return { ...prevevent, isDone: true };
      })
    );
  };

  return (
    <div className="flex justify-center ">
      <>
        <input
          placeholder="Enter Your Event"
          value={newevents}
          onChange={updateValue}
        ></input>
        <br />
        <button onClick={addNewEvent} className="btn">
          Add Event
        </button>
        <br />
        <br />
        <br />
        <hr />
        <h4>Event List</h4>
        <ul>
          {events.map((event) => (
            <li key={event.id}>
              <span
                style={event.isDone ? { textDecoration: "line-through" } : {}}
              >
                {event.event}
              </span>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <button onClick={() => deleteevent(event.id)} className="btn">
                Delete
              </button>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <button onClick={() => eventDone(event.id)} className="btn">
                Done
              </button>
            </li>
          ))}
        </ul>
        <br />
        <br />
        <br />
        <br />
        <button onClick={allDone} className="btn">
          All Done
        </button>
      </>
    </div>
  );
}
