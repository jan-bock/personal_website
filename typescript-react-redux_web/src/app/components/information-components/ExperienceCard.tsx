import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";

const ExperienceCard = () => {
  return (
    <>
      <Card sx={{ minWidth: 275, width: "400px" }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant="h5" component="div">
            {/* be{bull}nev{bull}o{bull}lent */}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography>
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
      </Card>{" "}
    </>
  );
};

export default ExperienceCard;
