import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { ProductsSkeleton } from "../components/ProductsSkeleton";
import ProductCard from "../components/ProductCard";
import Grid from "@mui/material/Grid2";
import TablePagination from "@mui/material/TablePagination";
import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const getProducts = async (limit, page, order) => {
  const res = await axios.get("http://localhost:3000/api/product", {
    params: {
      limit,
      page,
      order,
    },
  });
  return res.data;
};

export default function Products() {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(8);
  const [order, setOrder] = useState("");

  const handleChange = (event) => {
    setOrder(event.target.value);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage + 1);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1);
  };
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ["products", rowsPerPage, page, order],
    queryFn: () => getProducts(rowsPerPage, page, order),
  });

  return (
    <>
      <Box
        sx={{ minWidth: 120, my: 2, display: "flex", justifyContent: "end" }}
      >
        <FormControl sx={{ width: "400px" }}>
          <InputLabel id="demo-simple-select-label">Sort By:</InputLabel>
          <Select
            size="small"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={order}
            label="Sort By"
            onChange={handleChange}
          >
            <MenuItem value="">Best match</MenuItem>
            <MenuItem value={"asc"}>Price low to high</MenuItem>
            <MenuItem value={"desc"}>Price hight to low</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Grid container spacing={2}>
        {isLoading ? (
          <>
            <ProductsSkeleton />
          </>
        ) : (
          data.data.map((product) => (
            <Grid key={product._id} size={{ md: 3, sm: 6 }}>
              <ProductCard product={product} />
            </Grid>
          ))
        )}
      </Grid>
      {isSuccess && (
        <TablePagination
          component="div"
          count={data.total}
          page={page - 1}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[8, 16, 24]}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      )}
    </>
  );
}
