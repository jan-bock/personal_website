//structure:
//two column structure; left side non scrolling, right side scrolling

import BiographyColumn from "../components/BiographyColumn";

const LandingPage = () => {
  return (
    <>
      <div className="landing-page-container">
        <div className="columns">
          {/* column 1 */}
          <BiographyColumn />
          {/* column 2 */}
          <div className="lp-column">THERE</div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
