import projects from "../../../json/projects.json"
import { Box } from "@mui/material";
import ProjectCard from "./ProjectCard";

export interface ProjectCardFace {
  projectTitle: string;
  link: string,
  description: string;
  skills: string[];
}

const MyProjects = () => {
  const renderProjectCards = (projects: ProjectCardFace[]) => {
    return projects.map((project) => {
      return (
        <>
          <ProjectCard key={project.projectTitle} cardInfo={project} />
        </>
      );
    });
  };

  return (
    <Box className="experience-container" sx={{ paddingBottom: "50px" }}>
      {renderProjectCards(projects)}
    </Box>
  );
};

export default MyProjects;
