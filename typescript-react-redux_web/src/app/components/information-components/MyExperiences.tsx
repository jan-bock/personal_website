import ExperienceCard from "./ExperienceCard";
import experiences from "../../json/experiences.json";
import { Box } from "@mui/material";

export interface ExperienceCardFace {
  fromDate: string;
  toDate: string;
  roleTitle: string;
  company: string;
  roleType: string;
  description: string;
  skills: string[];
}

const MyExperiences = () => {
  const renderExperienceCards = (experiences: ExperienceCardFace[]) => {
    return experiences.map((log) => {
      return (
        <>
          <ExperienceCard key={log.roleTitle} cardInfo={log} />
        </>
      );
    });
  };

  return (
    <Box sx={{ paddingBottom: "50px" }}>
      {renderExperienceCards(experiences)}
    </Box>
  );
};

export default MyExperiences;
