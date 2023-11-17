import { useState, useEffect } from "react";

const ToggleChallenge = () => {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    {
      toggle ? setToggle(false) : setToggle(true);
    }
  };

  return (
    <div>
      <button className="btn" style={{ margin: "20px" }} onClick={handleToggle}>
        Toggle
      </button>
      {toggle ? <RightWay /> : <WrongWay />}
    </div>
  );
};

const RightWay = () => {
  return (
    <div>
      <h5>Your answer is right 😄</h5>
    </div>
  );
};

const WrongWay = () => {
  return (
    <div>
      <h5>Your answer is wrong 😞</h5>
    </div>
  );
};

export default ToggleChallenge;
