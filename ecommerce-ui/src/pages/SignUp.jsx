import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import Alert from "@mui/material/Alert";
import { Link } from "react-router";

export default function SignUp() {
  return (
    <Stack
      sx={{ width: "80%", mx: "auto" }}
      direction="column"
      justifyContent="space-between"
    >
      <Card sx={{ p: 10 }} variant="outlined">
        <Typography
          component="h1"
          variant="h4"
          sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }}
        >
          Sign Up
        </Typography>
        <Alert sx={{ my: 2 }} severity="error">
          Example error message
        </Alert>
        <Box
          component="form"
          noValidate
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            gap: 2,
          }}
        >
          <FormControl>
            <FormLabel htmlFor="name">Name</FormLabel>
            <TextField
              id="name"
              type="name"
              name="name"
              placeholder="Your name"
              autoComplete="name"
              autoFocus
              fullWidth
              variant="outlined"
              error={true}
              helperText="Name is required"
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <TextField
              id="email"
              type="email"
              name="email"
              placeholder="your@email.com"
              autoComplete="email"
              fullWidth
              variant="outlined"
              error={true}
              helperText="Please enter a valid email address"
            />
          </FormControl>
          <FormControl>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <FormLabel htmlFor="password">Password</FormLabel>
            </Box>
            <TextField
              name="password"
              placeholder="••••••"
              type="password"
              id="password"
              autoComplete="current-password"
              fullWidth
              variant="outlined"
              error={true}
              helperText="Password must meet complexity requirements"
            />
          </FormControl>
          <Button type="button" fullWidth variant="contained">
            Sign Up
          </Button>
          <Typography sx={{ textAlign: "center" }}>
            Already have an account? <Link to="/sign-in">Sign In</Link>
          </Typography>
        </Box>
      </Card>
    </Stack>
  );
}
