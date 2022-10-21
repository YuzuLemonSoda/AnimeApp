import React from "react";
import { Nav, NavLink, NavMenu }
    from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
           <NavLink to="/" activestyle={{fontWeight: "bold", color: "red"}}>
            Home
            </NavLink>
          <NavLink to="/about" activestyle={{fontWeight: "bold", color: "red"}}>
            About
          </NavLink>
          <NavLink to="/rankings" activestyle={{fontWeight: "bold", color: "red"}}>
            Top 25 Anime
          </NavLink>
          <NavLink to="/user" activestyle={{fontWeight: "bold", color: "red"}}>
            User
          </NavLink>
          <NavLink to="/sign-up" activestyle={{fontWeight: "bold", color: "red"}}>
            Sign Up
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
