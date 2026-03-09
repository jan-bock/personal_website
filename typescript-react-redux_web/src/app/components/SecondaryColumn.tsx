import MyBackground from "./information-components/MyBackground";
import MyExperiences from "./information-components/experience/MyExperiences";
import MyProjects from "./information-components/projects/MyProjects";
import MyArticles from "./information-components/articles/MyArticles";

const SectionHeader = ({ label }: { label: string }) => (
  <p className="section-header">{label}</p>
);

const SecondaryColumn = () => {
  return (
    <div className="lp-column secondary-column">
      <MyBackground />
      <SectionHeader label="Experience" />
      <MyExperiences />
      <SectionHeader label="Projects" />
      <MyProjects />
      <SectionHeader label="Writing" />
      <MyArticles />
      <p className="column-end-info">
        Design inspired by{" "}
        <a className="brittany" href="https://brittanychiang.com/">
          Brittany Chiang
        </a>
        . Built with React, TypeScript, and Material UI. Deployed on Vercel.
      </p>
    </div>
  );
};

export default SecondaryColumn;
