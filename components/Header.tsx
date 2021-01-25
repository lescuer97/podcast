import React from "react";
import Link from 'next/link';

const Header = () => {


  return (
    <header className="flex flex-col md:justify-between md:header-height md:flex-row w-full px-4 ">
      <Link href="/" ><a>Leito's Complaints</a></Link>
      <ul className="flex flex-wrap md:flex-row space-y-1 md:space-y-0 md:space-x-5">
        <li className="">Itunes</li>
        <li className="">Spotify</li>
        <li className="">Google Play</li>
        <li>Youtube</li>
      </ul>
    </header>
  );
};

export default Header;
