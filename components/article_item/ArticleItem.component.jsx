import Link from "next/link";
const ArticleItem = ({ post }) => {
  return (
    <Link href="/article/[id]" as={`/article/${post.id}`}>
      <a>
        <div className="border my-3 p-2 mt-3 md:mt-5  md:w-2/4 shadow-md rounded bg-white">
          <h2 className="break-words tracking-wide leading-normal  uppercase text-blue-600 font-bold text-xl hover:underline cursor-pointer">
            {post.title}
          </h2>
          <p>{post.excerpt}</p>
        </div>
      </a>
    </Link>
  );
};

export default ArticleItem;
