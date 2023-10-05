import ContactMethods from "./contact/ContactMethods";
import NavigationContainer from "./navigation/NavigationContainer";
import accenture from "./hover-img/ACN-cce5b411.png"
import { Box } from "@mui/material";

const BiographyColumn = () => {
  return (
    <>
      <div id="bio-container" className="lp-column">
        <h1 id="jan-bock">Jan Bock</h1>
        <Box sx={{display: "flex", flexDirection: "row", columnGap: "15px"}}>
          <h3 id="description">Frontend Developer at Accenture</h3>
          <img id="accenture" src={accenture}/>
        </Box>
        <h5 className="slogan-style" id="opaque">
          Creating seamless user experiences with <br></br>modern engineering
          techniques
        </h5>
        <NavigationContainer />
        <ContactMethods />
      </div>
    </>
  );
};

export default BiographyColumn;
