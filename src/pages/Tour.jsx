import { Accordion, Box, Container, Typography } from "@mui/material";
import QuiltedImageList from "../components/QuiltedImageList";
import CustomizedAccordions from "../components/CustomizedAccordions";

export default function Tour() {
  return (
    <Container sx={{ width: 900 }}>
      <Typography variant="h3" component="h1" marginTop={3}>
        Explore the World in Vegas
      </Typography>
      <Box marginTop={3} sx={{ display: "flex", gap: 0.5 }}>
        <img
          src="https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Greece image"
          height={350}
          width="auto"
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
    </Container>
  );
}
