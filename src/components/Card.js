import { Card } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

function SkillCard({ title, content }) {
  return (
    <Grid item xs={6}>
      <Card sx={{ minWidth: 275, maxWidth: 500 }}>
        <Paper elevation={5}>
          <CardContent>
            <Typography variant="h5" component="div">
              {title}
            </Typography>
            <Typography>{content}</Typography>
          </CardContent>
        </Paper>
      </Card>
    </Grid>
  );
}

export default SkillCard;
