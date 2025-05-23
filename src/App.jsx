import { Container, Grid } from "@mui/material";

import "./App.css";
import TourCard from "./components/TourCard";

function App() {
  return (
    <Container>
      <Grid container spacing={5}>
        <TourCard />
        <TourCard />
        <TourCard />
        <TourCard />
      </Grid>
    </Container>
  );
}

export default App;
