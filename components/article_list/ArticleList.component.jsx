import ArticleItem from "../article_item/ArticleItem.component";

const ArticleList = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <ArticleItem post={post} key={post.id} />
      ))}
    </div>
  );
};

export default ArticleList;
