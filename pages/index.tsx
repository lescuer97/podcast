import Header from "../components/Header";

import {  GetStaticProps } from "next";

import ShowData from "../components/ShowData";
import { getAllPosts, markdownToHtml } from "../lib/getMarkdown";
import { Items, Params } from "../lib/types";
import Link from "next/link";

export default function Home({ file, cont }) {
//CONNECT TO CMS
  return (


      <main className="main">
        {/* <div className="player">Hello</div> */}
        <div className="theme-scroll first-child " id="theme-scroll">
          {file.map((list) => {
            return <ListTile key={list.date} list={list} />;
          })}
        </div>
        <ShowData list={cont} />
      </main>

   
  );
}

const ListTile = (props) => {
  return (
    <div className="py-1 pl-5 pr-3 border border-solid border-l-0 border-t-0 ">
      {" "}
      <Link
        href={{
          pathname: "/show/[id]",
          query: { id: `${props.list.id}` },
        }}
        as={`/show/${props.list.slug}`}
      >
        <a>
          <p className="inline text-xs font-thin text-gray-500">
            Episode {props.list.id}
          </p>
          <h1> {props.list.title}</h1>
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