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
      <div className="lp-column bio slogan-style" id="ABOUT" style={{ paddingBottom: "120px" }}>
        <b>Welcome!</b> I'm <b>Jan Bock</b>, a <b>Product Engineer based in London</b>. <br></br><br></br>
        I specialise in building high-performance, accessible TypeScript and React applications within cloud-native architectures. Currently at Skyscanner, I own components used by millions of travellers and run experiments that directly impact conversion and revenue. <br></br><br></br>
        Previously at Accenture, I led teams and delivered production systems across Retail, Energy, Automotive, and Public Sector. Explore my work and projects below, and feel free to get in touch.
      </div>
    </Box>
  );
};

export default MyBackground;
