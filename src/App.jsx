import { Container, Grid } from "@mui/material";
import "./App.css";
import TourCard from "./components/TourCard";

function App() {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item size={3}>
          <TourCard />
        </Grid>
        <Grid item size={3}>
          <TourCard />
        </Grid>
        <Grid item size={3}>
          <TourCard />
        </Grid>
        <Grid item size={3}>
          <TourCard />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
