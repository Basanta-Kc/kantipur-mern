import Grid from "@mui/material/Grid2";
import NavBar from "../components/NavBar";
import ProductCard from "../components/ProductCard";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <NavBar />
      <img src="/banner.jpg" width="100%" />
      <Typography variant="h4" textAlign={"center"} marginY={2}>
        Featured Product
      </Typography>
      <Grid container spacing={2}>
        <Grid size={{ md: 4 }}>
          <ProductCard />
        </Grid>
        <Grid size={{ md: 4 }}>
          <ProductCard />
        </Grid>
        <Grid size={{ md: 4 }}>
          <ProductCard />
        </Grid>
      </Grid>

      <Typography variant="h4" textAlign={"center"} marginY={2}>
        Latest Product
      </Typography>
      <Grid container spacing={2}>
        <Grid size={{ md: 4 }}>
          <ProductCard />
        </Grid>
        <Grid size={{ md: 4 }}>
          <ProductCard />
        </Grid>
        <Grid size={{ md: 4 }}>
          <ProductCard />
        </Grid>
      </Grid>
    </>
  );
}
