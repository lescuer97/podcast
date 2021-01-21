import Header from "../../components/Header";
import { useRouter } from "next/router";

import { GetStaticProps, GetStaticPaths } from "next";

import ShowData from "../../components/ShowData";
import {
  getAllPosts,
  markdownToHtml,
  getPostfromSlug,
} from "../../lib/getMarkdown";
import { Items, Params } from "../../lib/types";
import Link from "next/link";

export default function Id({ file, arr }) {
  // TODO QUE EL LADO DERECHO CON LAS NOTAS DEL PODCAST SEA EL ULTIMO COMO PRESELECCIONADO,
  //      PERO QUE CAMBIE CUANDO SE SELECCIONA OTRO, SE PODRIA USAR USE STATE PARA ESO

const router = useRouter();
const pathForNotes= router.asPath.split("/show/")[1];

const cont = arr.find(element => element[1] == pathForNotes);
console.log(cont);

  // console.log(pathForNotes);
  return (
    <div className="flex flex-col items-center  ">
      <Header />

      <main className="flex flex-row mt-4  md:w-3/5 justify-between border border-solid">
        <div className="w-3/6">
          {file.map((dat) => {
            return <ListTile key={dat.date} dat={dat} />;
          })}
        </div>
        <ShowData dat={cont[0]} />
      </main>
    </div>
  );
}

const ListTile = (props) => {
  const router = useRouter();
const pathForNotes= router.asPath.split("/show/")[1];

  return (
    <div className={`h-16 pl-5 pr-2 ${props.dat.slug === pathForNotes && "bg-gray-200"}  border border-solid border-l-0`}>
      {" "}
      <Link
        href={{
          pathname: "/show/[slug]",
          query: { slug: `${props.dat.slug}` },
        }}
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

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const file: Items[] = getAllPosts([
    "title",
    "date",
    "id",
    "slug",
    "description",
    "content",
  ]);
  // get content from all posts
  const contentarr = file.map(async (fi) => {
    const hello = await markdownToHtml(fi.content);

    return [hello, fi.slug];
  });

// awaits the content promise so it can be pased to the page
  const arr = await Promise.all(contentarr)
    .then((fil) => {
      return fil;
    })
    .catch((err) => console.log("ERROR: ", err));

  return {
    props: {
      file,
      arr,
    },
  };
};
export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts(["slug", "id"]);
  console.log(posts);
  return {
    paths: [
      ...posts.map((post) => {
        return {
          params: {
            slug: post.slug,
            id: post.id,
          },
        };
      }),
    ],
    fallback: false,
  };
};
