import { Box, Icon } from "@mui/material";
import Email from "./contact-icons/email.png";
import Linkedin from "./contact-icons/linkedin.png";
import Github from "./contact-icons/github.png";
import Medium from "./contact-icons/medium.png";

const ContactMethods = () => {
  const onIconClick = (src: string) => {
    switch (src) {
      //Redirects
      case "github":
        window.open("https://github.com/jan-bock", "_blank") ||
          window.location.assign("https://github.com/jan-bock");
        break;
      case "linkedin":
        window.open("https://www.linkedin.com/in/j-bock/", "_blank") ||
          window.location.assign("https://www.linkedin.com/in/j-bock/");
        break;
      case "medium":
        // window.location.assign("");
        console.error("Coming Soon!");
        break;
      //Copies
      case "email":
        navigator.clipboard
          .writeText("j.g.bock@outlook.com")
          .then(() =>
            alert(
              "Jan's email has been copied! If it hasn't, please see his CV for other contact details. Or reach out directly to: j.g.bock@outlook.com"
            )
          );
        break;
      default:
        window.location.assign("");
        break;
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        columnGap: "10px",
        position: "absolute",
        bottom: "15%",
      }}
    >
      <img
        className="contact-icons"
        onClick={() => onIconClick("github")}
        id="github"
        src={Github}
      ></img>
      <img
        className="contact-icons"
        onClick={() => onIconClick("linkedin")}
        src={Linkedin}
      ></img>
      <img
        className="contact-icons"
        onClick={() => onIconClick("email")}
        src={Email}
      ></img>
      <img
        className="contact-icons"
        onClick={() => onIconClick("medium")}
        src={Medium}
      ></img>
    </Box>
  );
};

export default ContactMethods;
