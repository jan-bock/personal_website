import { Box, Divider } from "@mui/material";

interface NavigationProps {
  name: string;
}

const NavigationElement = ({ name }: NavigationProps) => {
  const onNavClick = (name: string) => {
    const scrollTo = "#" + name;
    // @ts-ignore
    window.location = scrollTo;
  };

  return (
    <Box className="navigation-el" onClick={() => onNavClick(name)}>
      <Box className="navigation-expanders"></Box>
      <li className="navigation-li">{name}</li>
    </Box>
  );
};

export default NavigationElement;
