import { Box } from "@mui/material";
import MyBackground from "./information-components/MyBackground";
import MyExperiences from "./information-components/experience/MyExperiences";
import MyProjects from "./information-components/projects/MyProjects";

const SecondaryColumn = () => {
  return (
    <div className="lp-column secondary-column">
      <MyBackground />
      <Box sx={{ marginTop: "125px" }} />
      <MyExperiences />
      <Box sx={{ marginTop: "15px" }} />
      <MyProjects />
    </div>
  );
};

export default SecondaryColumn;
