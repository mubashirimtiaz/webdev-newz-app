import { articles } from "../../../data";

export default function ({ query }, res) {
  const filteredArticle = articles.filter(({ id }) => id === query.id);
  if (filteredArticle.length > 0) {
    res.status(200).json(filteredArticle[0]);
  } else {
    res.status(404).json({
      message: `Article with the id ${filteredArticle.id} is not found`,
    });
  }
}
