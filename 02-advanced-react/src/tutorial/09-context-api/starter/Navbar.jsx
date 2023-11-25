import React, { useState } from "react";
import NavLinks from "./Navlinks";

const Navbar = () => {
  const [user, setUser] = useState({ name: "something" });

  const logout = () => {
    setUser(null);
  };
  return (
    <nav className="navbar">
      <h5>CONTEXT API</h5>
      <NavLinks user={user} logout={logout} />
    </nav>
  );
};

export default Navbar;
