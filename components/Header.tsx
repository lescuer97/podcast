import React from "react";
import Link from 'next/link';
import Play from "./svgs/Play";
import Youtube from "./svgs/Youtube";
import Spotify from "./svgs/Spotify";
import Itunes from "./svgs/Itunes";

const Header = () => {


  return (
    <header className=" header-height justify-center " id="header-height"> 
      <Link href="/" ><a className="p-3">Leito's Complaints</a></Link>
      <ul className="flex flex-row md:flex-row  space-y-1 md:space-y-0 md:space-x-5  ">
        <div className=" flex flex-col md:flex-row justify-center">
          <li className="px-4 py-2 mx-2   text-center "> <Itunes style="svg inline"/> Itunes</li>
          <li className="px-4 py-2 mx-2  text-center"> <Spotify style="svg fill-current inline"/> Spotify</li>
        </div>
        <div className="flex flex-col md:flex-row justify-center">
          <li className="px-4 py-2 mx-2  text-center"> 
               <Play style="svg inline" /> Google Play</li>
          <li className="px-4 py-2 mx-2  text-center"> 
              <Youtube style="svg inline"/> Youtube</li>
        </div>
      </ul>
    </header>
  );
};

export default Header;
