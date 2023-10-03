import articles from "../../../json/articles.json"
import { Box } from "@mui/material";
import ArticleCard from "./ArticleCard";

export interface ArticleCardFace {
  articleTitle: string;
  link: string,
  description: string;
}

const MyArticles = () => {
  const renderArticleCards = (articles: ArticleCardFace[]) => {
    return articles.map((article) => {
      return (
        <>
          <ArticleCard key={article.articleTitle} cardInfo={article} />
        </>
      );
    });
  };

  return (
    <Box className="experience-container" id="ARTICLES" sx={{ paddingBottom: "50px" }}>
      {renderArticleCards(articles)}
    </Box>
  );
};

export default MyArticles;
