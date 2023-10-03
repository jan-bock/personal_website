import ContactMethods from "./contact/ContactMethods";
import NavigationContainer from "./navigation/NavigationContainer";

const BiographyColumn = () => {
  return (
    <>
      <div id="bio-container" className="lp-column">
        <h1 id="jan-bock">Jan Bock</h1>
        <h3 id="description">Frontend Developer at Accenture</h3>
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
