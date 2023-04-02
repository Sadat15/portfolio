import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import SkillCard from "../components/Card";

function About() {
  return (
    <Container>
      <Grid container spacing={2}>
        <SkillCard title={"Front end"} />
        <SkillCard title={"Back end"} />
      </Grid>
    </Container>
  );
}

export default About;
