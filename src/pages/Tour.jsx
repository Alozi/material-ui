import {
  Accordion,
  Box,
  Container,
  Typography,
  Paper,
  Rating,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import { AccessTime } from "@mui/icons-material";
import { useParams } from "react-router-dom";

import QuiltedImageList from "../components/QuiltedImageList";
import CustomizedAccordions from "../components/CustomizedAccordions";
import BasicModal from "../components/BasicModal";

import data from "../data.json";

export default function Tour() {
  const { id } = useParams();

  const tours = data.flatMap((city) =>
    city.tours.map((tour) => ({ ...tour, cityName: city.name }))
  );

  const tour = tours.find((t) => t.id == id);

  if (!tour) {
    return (
      <Container sx={{ marginY: 5 }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{ marginTop: 5, marginBottom: 3 }}
        >
          Tour doesn't find
        </Typography>
      </Container>
    );
  }

  return (
    <Container
      sx={{
        width: {
          xs: "auto",
          lg: 900,
        },
        pb: 8,
      }}
    >
      <Typography variant="h3" component="h1" marginTop={3}>
        {tour.name}
      </Typography>
      <Box
        marginTop={3}
        sx={{ display: { xs: "block", md: "flex" }, gap: { xs: 0, md: 0.5 } }}
      >
        <Box
          component="img"
          src={tour.image}
          alt="Greece image"
          sx={{
            height: { xs: 200, md: 350 },
            width: { xs: "100%", md: "auto" },
            objectFit: "cover", // за потреби
          }}
        />
        <QuiltedImageList />
      </Box>
      <Box
       marginTop={3}
        paddingX={1}
        sx={{
          display: "grid",
          gridTemplateColumns: "auto auto auto",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <AccessTime sx={{ width: 12.5 }} />
          <Typography variant="body2" component="p">
            {tour.duration} hours
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <Rating value={tour.rating} readOnly precision={0.5} size="small" />
          <Typography variant="body2" component="p">
            {tour.rating}
          </Typography>
          <Typography variant="body3" component="p" ml={1}>
            ({tour.numberOfReviews}) reviews
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" component="h3">
            From ${tour.price}
          </Typography>
        </Box>
      </Box>
      <Box>
        <Typography variant="h6" component="h2" marginTop={3}>
          Description
        </Typography>
        <Typography variant="caption" component="p" marginTop={3}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
          suscipit, saepe totam quas enim neque reprehenderit commodi nemo cum,
          ratione optio repellat aliquid laudantium ad? Consequuntur praesentium
          aspernatur rerum nemo.
        </Typography>
      </Box>
      <Box>
        <Typography variant="h6" component="h2" marginTop={3} marginBottom={3}>
          Frequently Asked Questions
        </Typography>
        <CustomizedAccordions />
      </Box>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation>
          <BasicModal />
        </BottomNavigation>
      </Paper>
    </Container>
  );
}
