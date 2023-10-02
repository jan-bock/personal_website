import { Box } from "@mui/material";
import MyBackground from "./information-components/MyBackground";
import MyExperiences from "./information-components/MyExperiences";

const SecondaryColumn = () => {
  return (
    <div className="lp-column secondary-column">
      <MyBackground />
      <Box sx={{ marginTop: "125px" }} />
      <MyExperiences />
    </div>
  );
};

export default SecondaryColumn;
