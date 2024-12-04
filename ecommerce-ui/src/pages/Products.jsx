import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { ProductsSkeleton } from "../components/ProductsSkeleton";
import ProductCard from "../components/ProductCard";
import Grid from "@mui/material/Grid2";
import TablePagination from "@mui/material/TablePagination";
import { useState } from "react";

const getLatestProduct = async () => {
  const res = await axios.get("http://localhost:3000/api/product");
  return res.data;
};

export default function Products() {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getLatestProduct,
  });

  return (
    <>
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
      <TablePagination
        component="div"
        count={data.total}
        page={page - 1}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
}
