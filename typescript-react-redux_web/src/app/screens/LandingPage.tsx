import BiographyColumn from "../components/BiographyColumn";
import SecondaryColumn from "../components/SecondaryColumn";

const LandingPage = () => {
  return (
    <>
      <div className="landing-page-container">
        <div className="columns">
          <BiographyColumn />
          <SecondaryColumn />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
