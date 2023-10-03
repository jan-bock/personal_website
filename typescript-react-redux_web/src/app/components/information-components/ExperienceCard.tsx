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
            label={entry}
          />
        </>
      );
    });
  };

  return (
    <>
      <Card className="experience-card">
        <CardContent>
          <Box
            sx={{ display: "flex", flexDirection: "row", columnGap: "5px"}}
          >
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
              >
                <div>{cardInfo.roleTitle}</div>
                <div>{cardInfo.company}</div>
              </Typography>
              <Typography sx={{ mb: 1.5, marginTop: "-10px"}} color="text.secondary">
                {cardInfo.roleType}
              </Typography>
              <Typography sx={{ mb: 1.5, fontSize: "14px"}} color="text.secondary">
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
