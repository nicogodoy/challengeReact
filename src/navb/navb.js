import React from "react";
import { Navbar, Collapse, BDiv, BH5, BSpan } from "bootstrap-4-react";

export default function navb() {
  return (
    <div>
      <Collapse id="navbarToggleExternalContent">
        <BDiv bg="dark" p="4">
          <BH5 text="white">SuperHero</BH5>
          <BSpan text="muted">Debes loguearte para acceder a tus SuperHeroes</BSpan>
        </BDiv>
      </Collapse>
      <Navbar dark bg="dark">
        <Navbar.Toggler target="#navbarToggleExternalContent" />
      </Navbar>
    </div>
  );
}
