import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Typography,
} from "@mui/material";

const ExperienceCard = () => {
  return (
    <>
      <Card sx={{ minWidth: 275, width: "550px" }}>
        <CardContent>
          <Box
            sx={{ display: "flex", flexDirection: "row", columnGap: "20px" }}
          >
            <Box sx={{ width: "200px", minWidth: "100px" }}>Date - Date</Box>
            <Box>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Role TITLE | Company
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Type of role
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Lorem ipsum description lorem ipsum description lorem ipsum
                description lorem ipsum description lorem ipsum description
                lorem ipsum description lorem ipsum description lorem ipsum
                description lorem ipsum description lorem ipsum description
                lorem ipsum description
              </Typography>

              {/* Dynamic rendering of skills passed in */}
              <Chip sx={{ marginRight: "5px" }} label="Skill 1" />
              <Chip sx={{ marginRight: "5px" }} label="Skill 2" />
              <Chip sx={{ marginRight: "5px" }} label="Skill 3" />
            </Box>
          </Box>
        </CardContent>
      </Card>{" "}
    </>
  );
};

export default ExperienceCard;
