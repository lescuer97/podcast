import React from "react";
import Link from 'next/link';

import {Youtube, Spotify, Itunes, Play} from "./svgs/small_logos";

import Logo from "./svgs/Logo";

export default function Header()  {

  return (
    <header className="header justify-center" id="header"> 
      <Link href="/" ><a className=""><Logo /></a></Link>
      <ul className="flex flex-row md:flex-row   md:mt-2 ">
        <div className=" flex flex-col md:flex-row justify-center">
          <li className="px-4 py-2 mx-2   text-center "> 
            <Itunes /> Itunes</li>
          <li className="px-4 py-2 mx-2  text-center"> 
            <Spotify /> Spotify</li>
        </div>
        <div className="flex flex-col md:flex-row justify-center">
          <li className="px-4 py-2 mx-2  text-center"> 
               <Play  /> Google Play</li>
          <li className="px-4 py-2 mx-2  text-center"> 
              <Youtube /> Youtube</li>
        </div>
      </ul>
    </header>
  );
};


