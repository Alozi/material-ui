import { Container, Grid, Typography } from "@mui/material";

import "./App.css";
import TourCard from "./components/TourCard";

function App() {
  return (
    <Container>
      <Typography variant="h2" component="h1">
        Greece
      </Typography>
      <Grid container spacing={5}>
        <TourCard
          img="https://plus.unsplash.com/premium_photo-1661964149725-fbf14eabd38c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JlZWNlfGVufDB8fDB8fHww"
          title="Oia, Greece"
          duration="5 hours"
          rating="5"
          reviews="(465 reviews)"
          price="From $ 100"
        />
        <TourCard
          img="https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Santorini, Greece"
          duration="2 hours"
          rating="4.5"
          reviews="(651 reviews)"
          price="From $ 150"
        />
        <TourCard
          img="https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Oia, Greece"
          duration="15 hours"
          rating="3.5"
          reviews="(1051 reviews)"
          price="From $ 99"
        />
        <TourCard
          img="https://plus.unsplash.com/premium_photo-1688410049290-d7394cc7d5df?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Oia, Greece"
          duration="3 hours"
          rating="4"
          reviews="(319 reviews)"
          price="From $ 199"
        />
      </Grid>
    </Container>
  );
}

export default App;
