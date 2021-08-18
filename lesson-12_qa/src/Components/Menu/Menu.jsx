import React from "react";
import { MenuContainer, MenuItem } from "./Menu.styled";
import { NavLink, useLocation } from "react-router-dom";
export default function Menu() {
  const location = useLocation();

  return (
    <MenuContainer>
      <MenuItem>
        <NavLink to="/">Home</NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink
          to={{
            pathname: "/about",
            state: {
              from: location,
            },
          }}
        >
          About
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink to="/map">Map</NavLink>
      </MenuItem>
    </MenuContainer>
  );
}
