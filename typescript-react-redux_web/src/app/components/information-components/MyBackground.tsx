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




        {/* While studying a B.Sc at Durham University, I discovered an enjoyment
        for technical tasks and problem solving. From using GIS, statistical
        programming methods (R; Python; Stata), and image classification in
        Remote Sensing,{" "}
        <b>I dove head first into the world of software development </b>
        with step 1 after uni... Googling how to become a frontend developer.
        <br></br>
        <br></br>
        Fast forward a few years, I've completed a Full Stack JavaScript
        Bootcamp, have worked with impactful <b>government</b> clients and{" "}
        <b>global household names</b> alike at <b>Accenture!</b> In my free
        time, <b>I'm passionate about Tech4Good</b> and lead the Frontend
        development of <b>the Donation Genie</b>; and love to build the
        communities that I'm involved in.
        <br></br>
        <br></br>
        When I'm not coding, I'm either with friends, travelling, at the gym, or
        strengthening my languages! */}
      </div>
    </Box>
  );
};

export default MyBackground;
