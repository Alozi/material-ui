import {
  Accordion,
  Box,
  Container,
  Typography,
  Paper,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import QuiltedImageList from "../components/QuiltedImageList";
import CustomizedAccordions from "../components/CustomizedAccordions";
import BasicModal from "../components/BasicModal";

export default function Tour() {
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
        Explore the World in Vegas
      </Typography>
      <Box
        marginTop={3}
        sx={{ display: { xs: "block", md: "flex" }, gap: { xs: 0, md: 0.5 } }}
      >
        <Box
          component="img"
          src="https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Greece image"
          sx={{
            height: { xs: 200, md: 350 },
            width: { xs: "100%", md: "auto" },
            objectFit: "cover", // за потреби
          }}
        />
        <QuiltedImageList />
      </Box>

      <Box>
        <Typography variant="h6" component="h2" marginTop={3}>
          About this tour
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
