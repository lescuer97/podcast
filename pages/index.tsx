import Header from "../components/Header";

import { GetStaticPaths, GetStaticProps } from "next";

import ShowData from "../components/ShowData";
import { getAllPosts, markdownToHtml } from "../lib/getMarkdown";
import { Items, Params } from "../lib/types";
import Link from "next/link";

export default function Home({ file, cont }) {
  // TODO QUE EL LADO DERECHO CON LAS NOTAS DEL PODCAST SEA EL ULTIMO COMO PRESELECCIONADO,
  //      PERO QUE CAMBIE CUANDO SE SELECCIONA OTRO, SE PODRIA USAR USE STATE PARA ESO

  return (
    <div className="flex flex-col items-center  ">
      <Header />

      <main className="flex flex-row mt-4  md:w-3/5 justify-between border border-solid ">
        <div className="w-3/6 first-child">
          {file.map((dat) => {
            return <ListTile key={dat.date} dat={dat} />;
          })}
        </div>
        <ShowData dat={cont} />
      </main>
    </div>
  );
}

const ListTile = (props) => {
  return (
    <div className="h-16 pl-5 pr-2 border border-solid border-l-0">
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