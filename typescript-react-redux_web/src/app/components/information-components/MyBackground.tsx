import { Avatar, Box } from "@mui/material";
import janBock from "../bio-images/Jan_Bock.jpg";

const MyBackground = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <Avatar
        alt="Jan Bock"
        src={janBock}
        sx={{ width: 56, height: 56, marginLeft: "15px", marginRight: "15px" }}
      />
      <div className="lp-column bio slogan-style" id="ABOUT">
        Welcome! I'm <b>Jan Bock</b>, a Full Stack Engineer based in London.{" "}
        <br></br>
        <br></br>I build scalable, high-performance web applications using
        modern full-stack technologies, creating impactful digital experiences
        that drive innovation. <br></br>
        <br></br>I thrive in dynamic, agile environments and love collaborating
        with modern engineering teams to create state-of-the-art, trailblazing
        products for my clients and users.<br></br>
        <br></br>My journey is driven by continuous learning and a commitment to
        delivering top-tier tech solutions. Explore my work and projects, and if
        you have an interesting project, don't hesistate to shoot over an email!
      </div>
    </Box>
  );
};

export default MyBackground;
