import ContactMethods from "./contact/ContactMethods";

const BiographyColumn = () => {
  return (
    <>
      <div id="bio-container" className="lp-column">
        <h1 id="jan-bock">Jan Bock</h1>
        <h3 id="description">Frontend Developer at Accenture</h3>
        <h5 className="slogan-style">
          Creating seamless user experiences with <br></br>modern engineering
          techniques
        </h5>
        {/* Navigation component in the form of a list with some animations */}
        {/* Contact feature: Github, LinkedIn, Goodreads, Donation Genie */}
        <ContactMethods />
      </div>
    </>
  );
};

export default BiographyColumn;
