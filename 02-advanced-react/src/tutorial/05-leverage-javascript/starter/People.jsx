import React from "react";
import avatar from "../../../assets/default-avatar.svg";

export function People(props) {
  const { name, nickName = "John Doe", images } = props;
  const img = images?.[0]?.small?.url ?? avatar;

  return (
    <div>
      <img src={img} alt="name" style={{ width: "50px" }} />
      <h3>{name}</h3>
      <p>Nickname : {nickName}</p>
    </div>
  );
}
