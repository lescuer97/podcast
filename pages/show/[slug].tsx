import { useRouter } from "next/router";

import { GetStaticProps, GetStaticPaths } from "next";

import ShowData from "../../components/ShowData";
import { getAllPosts, markdownToHtml } from "../../lib/getMarkdown";
import { Items, Params } from "../../lib/types";
import Link from "next/link";

export default function Id({ file, arr }) {
  const router = useRouter();
  const pathForNotes = router.asPath.split("/show/")[1];

  const cont = arr.find((element) => element[1] == pathForNotes);

  return (
    <main className="main">
      {/* <div className="player">Hello</div> */}
      <div className="theme-scroll " id="theme-scroll">
        {file.map((list) => {
          return <ListTile key={list.date} list={list} />;
        })}
      </div>
      <ShowData list={cont[0]} />
    </main>
  );
}

const ListTile = (props) => {
  const router = useRouter();
  //takes the slug of the url path
  const pathForNotes = router.asPath.split("/show/")[1];

  return (
    <div
      className={` py-1 pl-5 pr-3 border border-solid border-l-0 border-t-0 ${
        // sees if the tile is the same as the selected slug and paints it of another color
        props.list.slug === pathForNotes && "bg-gray-200"
      }`}
    >
      {" "}
      <Link
        href={{
          pathname: "/show/[slug]",
          query: { slug: `${props.list.slug}` },
        }}
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
  const allPosts = file.map(async (post) => {
    const hello = await markdownToHtml(post.content);

    return [hello, post.slug];
  });

  // awaits the content promise so it can be pased to the page
  const arr = await Promise.all(allPosts)
    .then((file) => {
      return file;
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
