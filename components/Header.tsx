import React from "react";

const Header = () => {
  return (
    <header className="flex flex-col justify-between md:flex-row md:w-4/5 my-3">
      <div>Leito's Complaints</div>
      <ul className="flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-5">
        <li className="">Itunes</li>
        <li className="">Spotify</li>
        <li className="">Google Play</li>
        <li>Youtube</li>
      </ul>
    </header>
  );
};

export default Header;
