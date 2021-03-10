import ArticleList from "../components/article_list/ArticleList.component";
import { server } from "../config/index";
import Meta from "../components/meta/Meta.component";

export const getStaticProps = async () => {
  const response = await fetch(`${server}/api/articles`);
  const posts = await response.json();

  return {
    props: { posts },
  };
};

export default function Home({ posts }) {
  return (
    <>
      <Meta title="WebDev Newz | Home" />

      <h1 className="text-4xl md:text-6xl font-bold">
        Keep up to data with
        <span className="text-purple-700"> WebDev Newz!</span>
      </h1>
      <ArticleList posts={posts} />
    </>
  );
}
