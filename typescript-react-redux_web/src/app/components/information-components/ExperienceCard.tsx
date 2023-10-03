import { Box, Card, CardContent, Chip, Typography } from "@mui/material";
import { ExperienceCardFace } from "./MyExperiences";

interface ExperienceCardProps {
  cardInfo: ExperienceCardFace;
}

const ExperienceCard = ({ cardInfo }: ExperienceCardProps) => {
  const renderSkillChips = (skillsArray: string[]) => {
    return skillsArray.map((entry) => {
      return (
        <>
          <Chip
            sx={{ marginRight: "5px", marginBottom: "5px" }}
            key={entry}
            label={entry}
          />
        </>
      );
    });
  };

  const onExperienceClick = (cardInfo: ExperienceCardFace) => {
    if (cardInfo.company.includes("Accenture"))
      window.location.assign(
        "https://www.accenture.com/gb-en/services/technology/application-services"
      );
    else if (cardInfo.company.includes("Collate"))
      window.location.assign("https://www.collate.org/");
    else if (cardInfo.company.includes("Durham"))
      window.location.assign("https://www.durham.ac.uk/");
  };

  return (
    <>
      <Card
        className="experience-card"
        key={cardInfo.fromDate + "-" + cardInfo.toDate}
        onClick={() => onExperienceClick(cardInfo)}
      >
        <CardContent>
          <Box sx={{ display: "flex", flexDirection: "row", columnGap: "5px" }}>
            <Box
              sx={{
                width: "200px",
                minWidth: "150px",
                fontFamily: "Inter",
                fontWeight: 600,
                fontSize: "12px",
                paddingTop: "4px",
              }}
              color="text.secondary"
              key={cardInfo.fromDate + "-" + cardInfo.toDate}
            >
              {cardInfo.fromDate} - {cardInfo.toDate}
            </Box>
            <Box>
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
              {/* Dynamic rendering of skills passed in */}
              {renderSkillChips(cardInfo.skills)}
            </Box>
          </Box>
        </CardContent>
      </Card>{" "}
    </>
  );
};

export default ExperienceCard;
