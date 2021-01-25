import Header from "../components/Header";

import {  GetStaticProps } from "next";

import ShowData from "../components/ShowData";
import { getAllPosts, markdownToHtml } from "../lib/getMarkdown";
import { Items, Params } from "../lib/types";
import Link from "next/link";

export default function Home({ file, cont }) {
//TODO MAKE THE MOBILE VERSION WORK BETTER

  return (
    <div className="w-100 h-100 flex justify-center">
      <div className="complete" >
    
      <Header />

      <main className="main">
        {/* <div className="player">Hello</div> */}
        <div className="theme-scroll first-child " id="theme-scroll">
          {file.map((dat) => {
            return <ListTile key={dat.date} dat={dat} />;
          })}
        </div>
        <ShowData dat={cont} />
      </main>
    </div>
    </div>
   
  );
}

const ListTile = (props) => {
  return (
    <div className="pl-5 pr-2 py-1 border border-solid border-l-0 border-t-0">
      {" "}
      <Link
        href={{
          pathname: "/show/[id]",
          query: { id: `${props.dat.id}` },
        }}
        as={`/show/${props.dat.slug}`}
      >
        <a>
          <p className="inline text-xs font-thin text-gray-500">
            Episode {props.dat.id}
          </p>
          <h1> {props.dat.title}</h1>
        </a>
      </Link>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }: Params) => {
  const file: Items[] = getAllPosts([
    "title",
    "date",
    "id",
    "slug",
    "description",
    "content",
  ]);
 
  const cont = await markdownToHtml(file[0].content);

  return {
    props: {
      file,
      cont,
    },
  };
};