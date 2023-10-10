import NavigationElement from "./NavigationElement";

const NavigationContainer = () => {
  return (
    <div>
      <NavigationElement name="ABOUT" />
      <NavigationElement name="EXPERIENCES" />
      <NavigationElement name="PROJECTS" />
      {/* <NavigationElement name="ARTICLES" /> */}
    </div>
  );
};

export default NavigationContainer;
