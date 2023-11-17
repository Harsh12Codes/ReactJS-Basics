import { People } from "./People";
import { people } from "../../../data";
const List = () => {
  return (
    <div>
      <h2>List of people</h2>
      {people.map((person) => {
        return (
          <div key={person.id}>
            <People {...person} />
          </div>
        );
      })}
    </div>
  );
};

export default List;
