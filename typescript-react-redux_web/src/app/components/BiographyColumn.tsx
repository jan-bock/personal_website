import ContactMethods from "./contact/ContactMethods";
import NavigationContainer from "./navigation/NavigationContainer";
import accenture from "./bio-images/ACN-cce5b411.png";
import { Avatar, Box } from "@mui/material";
import janBock from "./bio-images/Jan_Bock.jpg";

const BiographyColumn = () => {
  return (
    <>
      <div id="bio-container" className="lp-column">
        <h1 id="jan-bock">Jan Bock</h1>
        <Box sx={{ display: "flex", flexDirection: "row", columnGap: "15px" }}>
          <h3 id="description">Frontend Developer at Accenture</h3>
          <img id="accenture" alt="accenture logo" src={accenture} />
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
