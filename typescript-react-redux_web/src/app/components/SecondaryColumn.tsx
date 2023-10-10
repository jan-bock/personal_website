import { Box } from "@mui/material";
import MyBackground from "./information-components/MyBackground";
import MyExperiences from "./information-components/experience/MyExperiences";
import MyProjects from "./information-components/projects/MyProjects";
// import MyArticles from "./information-components/articles/MyArticles";

const SecondaryColumn = () => {
  return (
    <div className="lp-column secondary-column">
      <MyBackground />
      <Box sx={{ marginTop: "125px" }} />
      <MyExperiences />
      <Box sx={{ marginTop: "35px" }} />
      <MyProjects />
      <Box sx={{ marginTop: "35px" }} />
      {/* <MyArticles /> */}
      {/* <Box sx={{ marginTop: "35px" }} /> */}
      <p className="column-end-info">
        <b>
          Original design by{" "}
          <a className="brittany" href="https://brittanychiang.com/">
            Brittany Chiang
          </a>
          ; all code is mine
        </b>
        . Developed in Visual Studio Code; primarily built in React and
        Typescript. Tooling includes Material UI; deployed using Vercel.
      </p>
    </div>
  );
};

export default SecondaryColumn;
