//structure:
//two column structure; left side non scrolling, right side scrolling

import BiographyColumn from "../components/BiographyColumn";
import SecondaryColumn from "../components/SecondaryColumn";

const LandingPage = () => {

  //javascript



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
