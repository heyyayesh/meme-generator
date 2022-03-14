import React from "react";
import logo from '../images/trollface.png';

export default function Header() {
  return (
    <header>
      <img src={logo} alt="logo" />
      <h1>Meme Generator</h1>
    </header>
  )
}