import ContactMethods from "./contact/ContactMethods";
import NavigationContainer from "./navigation/NavigationContainer";
import { Box } from "@mui/material";

const BiographyColumn = () => {
  return (
    <>
      <div id="bio-container" className="lp-column">
        <h1 id="jan-bock">Jan Bock</h1>
        <Box sx={{ display: "flex", flexDirection: "row", columnGap: "15px" }}>
          <h3 id="description">Product Engineer <br></br>Skyscanner</h3>
        </Box>
        <h5 className="slogan-style" id="opaque">
          Building interfaces that millions of people <br></br>use every day
        </h5>
        <NavigationContainer />
        <ContactMethods />
      </div>
    </>
  );
};

export default BiographyColumn;
