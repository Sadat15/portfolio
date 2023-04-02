import { Card } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

function SkillCard({ title }) {
  return (
    <Grid item xs={6}>
      <Paper elevation={3}>
        <Card sx={{ minWidth: 275, maxWidth: 500 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              {title}
            </Typography>
          </CardContent>
        </Card>
      </Paper>
    </Grid>
  );
}

export default SkillCard;
