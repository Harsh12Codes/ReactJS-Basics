import { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removeAll = () => {
    setPeople([]);
  };

  const removeOne = (id) => {
    setPeople(
      people.filter((person) => {
        return person.id !== id;
      }),
    );
  };

  return (
    <div>
      <h2>People List</h2>
      <hr style={{ margin: "20px" }} />
      {people.map((person) => {
        return (
          <div key={person.id}>
            <h3>{person.name}</h3>
            <button
              type="button"
              className="btn"
              onClick={() => {
                removeOne(person.id);
              }}
            >
              remove
            </button>
          </div>
        );
      })}
      <hr style={{ margin: "20px" }} />
      <button type="button" className="btn" onClick={removeAll}>
        remove all
      </button>
    </div>
  );
};

export default UseStateArray;
