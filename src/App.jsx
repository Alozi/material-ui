import { useState } from "react";
import "./App.css";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  Paper,
  styled,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
} from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function App() {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box>
      <Container>
        <Typography variant="h1" sx={{ my: 2 }}>
          Hello MUI
        </Typography>
        <Typography sx={{ my: 1, textAlign: "left" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
        <Grid container spacing={2}>
          <Grid item>
            <Button variant="contained">Test Button</Button>
          </Grid>
          <Grid item>
            <Button variant="contained">Test Button</Button>
          </Grid>
          <Grid item>
            <Button variant="contained">Test Button</Button>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <Grid sx={{ my: 2 }} container spacing={2}>
          <Grid item xs={8}>
            <Item>xs=8</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={8}>
            <Item>xs=8</Item>
          </Grid>
        </Grid>

        <Stack sx={{ my: 2 }} spacing={2}>
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
        </Stack>
      </Container>
      <Container>
        <Stack direction="row" spacing={2}>
          <Paper elevation={0} sx={{ padding: 1 }}>
            Lorem ipsum dolor sit amet
          </Paper>
          <Paper sx={{ padding: 1 }}>Lorem ipsum dolor sit amet</Paper>
          <Paper elevation={3} sx={{ padding: 1 }}>
            Lorem ipsum dolor sit amet
          </Paper>
        </Stack>
      </Container>
      <Container>
        <Typography variant="h2" sx={{ my: 2 }}>
          Inputs
        </Typography>
        <Stack sx={{ my: 2 }} spacing={2}>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <TextField id="filled-basic" label="Filled" variant="filled" />
          <TextField id="standard-basic" label="Standard" variant="standard" />
        </Stack>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Container>
      <Container sx={{ my: 2 }}>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
      </Container>
      <Container sx={{ my: 2 }}>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
      </Container>
    </Box>
  );
}

export default App;
