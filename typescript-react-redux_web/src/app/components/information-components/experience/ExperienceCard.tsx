import { Box, Card, CardContent, Chip, Typography } from "@mui/material";
import { ExperienceCardFace } from "./MyExperiences";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import skyscannerLogo from "../../bio-images/skyscanner-logo.ico";
import accentureLogo from "../../bio-images/ACN-cce5b411.png";

interface ExperienceCardProps {
  cardInfo: ExperienceCardFace;
}

const ExperienceCard = ({ cardInfo }: ExperienceCardProps) => {
  const renderSkillChips = (skillsArray: string[]) => {
    return skillsArray.map((entry) => {
      return (
        <>
          <Chip
            sx={{
              marginRight: "5px",
              marginBottom: "5px",
              ":hover": {
                backgroundColor: "#0770e3",
                color: "white",
                transitionDuration: "0.3s",
              },
            }}
            key={entry}
            label={entry}
          />
        </>
      );
    });
  };

  const hasLink = (cardInfo: ExperienceCardFace) =>
    cardInfo.company.includes("Skyscanner") ||
    cardInfo.company.includes("Sainsbury") ||
    cardInfo.company.includes("National Grid") ||
    (cardInfo.company.includes("Accenture") && !cardInfo.company.includes("Internal")) ||
    cardInfo.company.includes("Durham");

  const onExperienceClick = (cardInfo: ExperienceCardFace) => {
    if (cardInfo.company.includes("Skyscanner"))
      window.open("https://www.skyscanner.net/", "_blank") ||
        window.location.assign("https://www.skyscanner.net/");
    else if (cardInfo.company.includes("Sainsbury"))
      window.open("https://www.sainsburys.co.uk/", "_blank") ||
        window.location.assign("https://www.sainsburys.co.uk/");
    else if (cardInfo.company.includes("National Grid"))
      window.open("https://uplift.nationalgrid.com/", "_blank") ||
        window.location.assign("https://uplift.nationalgrid.com/");
    else if (cardInfo.company.includes("Accenture") && !cardInfo.company.includes("Internal"))
      window.open(
        "https://www.accenture.com/gb-en/services/technology/application-services",
        "_blank",
      ) ||
        window.location.assign(
          "https://www.accenture.com/gb-en/services/technology/application-services",
        );
    else if (cardInfo.company.includes("Durham"))
      window.open("https://www.durham.ac.uk/", "_blank") ||
        window.location.assign("https://www.durham.ac.uk/");

  };

  return (
    <>
      <Card
        className="experience-card"
        key={cardInfo.fromDate + "-" + cardInfo.toDate}
        onClick={() => onExperienceClick(cardInfo)}
      >
        <CardContent sx={{ position: "relative" }}>
          {cardInfo.company.includes("Skyscanner") && (
            <img
              src={skyscannerLogo}
              alt="Skyscanner"
              style={{ position: "absolute", top: "16px", right: "16px", width: "40px", height: "40px" }}
            />
          )}
          {cardInfo.company.includes("Accenture") && (
            <img
              src={accentureLogo}
              alt="Accenture"
              style={{ position: "absolute", top: "16px", right: "16px", width: "40px", height: "40px" }}
            />
          )}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              "@media screen and (max-width: 1000px)": {
                flexDirection: "column",
                rowGap: "20px",
              },
            }}
          >
            <Box
              sx={{
                width: "200px",
                minWidth: "150px",
                fontFamily: "Inter",
                fontWeight: 600,
                fontSize: "12px",
                paddingTop: "4px",
                "@media screen and (max-width: 1000px)": {
                  display: "flex",
                  alignSelf: "flex-end",
                  width: "max-content",
                  minWidth: "0",
                },
              }}
              color="text.secondary"
              key={cardInfo.fromDate + "-" + cardInfo.toDate}
            >
              {cardInfo.fromDate} - {cardInfo.toDate}
            </Box>
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
                  key={cardInfo.roleTitle + "-" + cardInfo.company}
                >
                  <div>{cardInfo.roleTitle}</div>
                  <div>{cardInfo.company}</div>
                </Typography>
                {hasLink(cardInfo) && (
                  <Box>
                    <OpenInNewIcon sx={{ paddingLeft: "5px", width: "15px" }} />
                  </Box>
                )}
              </Box>
              <Typography
                sx={{ mb: 1.5, marginTop: "-10px" }}
                color="text.secondary"
              >
                {cardInfo.roleType}
              </Typography>
              <Typography
                sx={{ mb: 1.5, fontSize: "14px" }}
                color="text.secondary"
              >
                {cardInfo.description}
              </Typography>
              {renderSkillChips(cardInfo.skills)}
            </Box>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default ExperienceCard;
