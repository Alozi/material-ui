import { Container, Grid, Typography } from "@mui/material";

import TourCard from "../components/TourCard";
import cities from "../data.json";
import { Fragment } from "react";

export default function Home() {
  return (
    <>
      <Container sx={{ marginY: 5 }}>
        {cities.map((city) => (
          <Fragment key={city.id}>
            <Typography
              variant="h4"
              component="h2"
              sx={{ marginTop: 5, marginBottom: 3 }}
            >
              Top {city.name} Tours
            </Typography>
            <Grid container spacing={{ xs: 1, md: 5 }}>
              {city.tours.map((tour) => {
                return (
                  <TourCard
                    key={tour.id}
                    id={tour.id}
                    img={tour.image}
                    title={tour.name}
                    duration={tour.duration}
                    rating={tour.rating}
                    reviews={tour.numberOfReviews}
                    price={tour.price}
                  />
                );
              })}
            </Grid>
          </Fragment>
        ))}

        <Typography
          variant="h4"
          component="h2"
          sx={{ marginTop: 5, marginBottom: 3 }}
        >
          Top Greece Tours
        </Typography>
        <Grid container spacing={{ xs: 1, md: 5 }}>
          <TourCard
            id="id1"
            img="https://plus.unsplash.com/premium_photo-1661964149725-fbf14eabd38c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JlZWNlfGVufDB8fDB8fHww"
            title="Oia, Greece"
            duration="5 hours"
            rating="5"
            reviews="465xs"
            price="100"
          />
          <TourCard
            id="id2"
            img="https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Santorini, Greece"
            duration="2 hours"
            rating="4.5"
            reviews="651"
            price="150"
          />
          <TourCard
            id="id3"
            img="https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Oia, Greece"
            duration="15 hours"
            rating="3.5"
            reviews="1051"
            price="99"
          />
          <TourCard
            id="id4"
            img="https://plus.unsplash.com/premium_photo-1688410049290-d7394cc7d5df?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Oia, Greece"
            duration="3 hours"
            rating="4"
            reviews="319"
            price="199"
          />
        </Grid>
      </Container>
    </>
  );
}
