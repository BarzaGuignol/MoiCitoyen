import React from "react";
import { Link } from "react-router-dom";

import Logo from "@assets/drapeau-france.jpg";

export default function Navbar() {
  return (
    <div className="flex pb-1 bg-gray-200 justify-center border-blue-900 border-b-4">
      <img className="ml-10 h-20 w-20" src={Logo} alt="logo" />
      <div className="inline-block ml-20 space-x-6 mt-8">
        <Link to="/">Accueil</Link>
        <Link to="/travail">Travail</Link>
        <Link to="/logement">Logement</Link>
        <Link to="/santé">Santé</Link>
        <Link to="/éducation">Education</Link>
        <Link to="/recensement">Recensement</Link>
        <Link to="/findevie">Fin de vie</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}
