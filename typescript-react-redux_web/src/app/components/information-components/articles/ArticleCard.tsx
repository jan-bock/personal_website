import { Box, Card, CardContent, Typography } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { ArticleCardFace } from "./MyArticles";
import Placeholder from "./article-images/placeholder.jpg"

interface ArticleCardProps {
  cardInfo: ArticleCardFace;
}

const ArticleCard = ({ cardInfo }: ArticleCardProps) => {

  return (
    <>
      <Card
        className="experience-card"
        key={cardInfo.articleTitle}
        onClick={() =>
          window.open(cardInfo.link, "_blank") ||
          window.location.assign(cardInfo.link)
        }
      >
        <CardContent>
          <Box
            sx={{ display: "flex", flexDirection: "row", columnGap: "25px" }}
          >
            <Box
              sx={{
                minWidth: "125px",
                height: "75px",
                backgroundColor: "lightgrey",
              }}
            ><img id="image-container" src={Placeholder}/></Box>
            <Box>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Typography
                  sx={{
                    mb: 1.5,
                    fontFamily: "Inter",
                    fontWeight: 600,
                    letterSpacing: "-0.5px",
                  }}
                  className="experience-card-role"
                >
                  <div>{cardInfo.articleTitle}</div>
                </Typography>
                <Box>
                  <OpenInNewIcon sx={{ paddingLeft: "5px", width: "15px" }} />
                </Box>
              </Box>
              <Typography
                sx={{ mb: 1.5, fontSize: "14px" }}
                color="text.secondary"
              >
                {cardInfo.description}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default ArticleCard;
