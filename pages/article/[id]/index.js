import Link from "next/link";
import { server } from "../../../config/index";
import Meta from "../../../components/meta/Meta.component";

export const getStaticPaths = async () => {
  const response = await fetch(`${server}/api/articles`);
  const data = await response.json();
  const paths = data.map((elem) => ({
    params: { id: elem.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const response = await fetch(`${server}/api/articles/${id}`);
  const article = await response.json();
  return {
    props: { article },
  };
};

// export const getServerSideProps = async (context) => {
//   const id = context.params.id;
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${id}`
//   );
//   const article = await response.json();
//   return {
//     props: { article },
//   };
// };

const ArticleDetail = ({ article }) => {
  return (
    <>
      <Meta title={article.title} description={article.excerpt} />
      <h1 className="text-4xl md:text-6xl font-bold">
        Article
        <span className="text-purple-700"> Detail</span>
      </h1>
      <div className="mt-3">
        <h2 className="text-2xl text-blue-600 uppercase">{article.title}</h2>
        <p className="">{article.body}</p>
      </div>
      <br />
      <div className="inline-block">
        <Link href="/">
          <a>
            <p className="px-4 py-2 bg-purple-700 text-white hover:shadow-inner">
              Go Back
            </p>
          </a>
        </Link>
      </div>
    </>
  );
};

export default ArticleDetail;
