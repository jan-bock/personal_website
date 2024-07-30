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
        <b>Welcome!</b> I'm <b>Jan Bock</b>, a <b>Full Stack Engineer based in London</b>. <br></br><br></br>
        With expertise in JavaScript and Cloud Engineering, I bring innovative solutions to various industries, having worked in the Automotive, Manufacturing, Energy, and Public Sector, and Retail industries. <br></br><br></br>
        I thrive in dynamic, agile environments and love collaborating with modern engineering teams to create impactful, scalable modern applications. My journey is driven by continuous learning and a commitment to delivering top-tier tech solutions. Explore my work and projects, and if you have an interesting project or product idea, shoot me a message!
      </div>
    </Box>
  );
};

export default MyBackground;
