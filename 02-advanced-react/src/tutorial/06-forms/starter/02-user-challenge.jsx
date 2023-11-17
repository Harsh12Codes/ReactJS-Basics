import { useState } from "react";
import { data } from "../../../data";

const UserChallenge = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    const newUser = {
      id: users.length + 1,
      name: name,
    };
    const newUsers = [...users, newUser];
    setUsers(newUsers);
    setName("");
    console.log(newUsers);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            autoComplete="off"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {/*render users below */}
      <div className="new-user">
        {users.map((user) => {
          return <h5 key={user.id}>{user.name}</h5>;
        })}
      </div>
    </div>
  );
};
export default UserChallenge;
