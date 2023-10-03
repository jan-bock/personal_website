import NavigationElement from "./NavigationElement";

const NavigationContainer = () => {
    return (
        <div>
          <NavigationElement name="About"/>
          <NavigationElement name="Experiences" />
          <NavigationElement name="Projects" />
        </div>
    )
}

export default NavigationContainer;