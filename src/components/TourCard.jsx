import { Box, Grid, Paper, Rating, Typography } from "@mui/material";
import { AccessTime } from "@mui/icons-material";

export default function TourCard({
  img,
  title,
  duration,
  rating,
  reviews,
  price,
}) {
  return (
    <Grid item size={3}>
      <Paper elevation={3}>
        <img className="img" src={img} alt="Greece image" />
        <Box paddingX={1}>
          <Typography variant="subtitle1" component="h2">
            {title}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <AccessTime sx={{ width: 12.5 }} />
            <Typography variant="body2" component="p">
              {duration}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              marginTop: 3,
            }}
          >
            <Rating value={rating} readOnly precision={0.5} size="small" />
            <Typography variant="body2" component="p">
              {rating}
            </Typography>
            <Typography variant="body2" component="p" marginLeft={3}>
              {reviews}
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" component="h3">
              {price}
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
}
