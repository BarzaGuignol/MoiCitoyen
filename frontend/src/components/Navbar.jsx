import React from "react";
import { Link } from "react-router-dom";

import Logo from "@assets/logo.svg";

export default function Navbar() {
  return (
    <div className="flex justify-between pb-1 bg-gray-200">
      <img className="ml-10 h-20 w-20" src={Logo} alt="logo" />
      <div className="inline-block mr-20">
        <Link to="/">Accueil</Link>
        <Link to="/travail">Travail</Link>
        <Link to="/logement">Logement</Link>
        <Link to="/santé">Santé</Link>
        <Link to="/éducation">Education</Link>
        <Link to="/recensement">Recensement</Link>
        <Link to="/mort">Mort</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}
