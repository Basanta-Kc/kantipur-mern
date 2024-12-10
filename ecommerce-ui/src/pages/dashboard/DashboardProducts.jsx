import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import axios from "axios";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { useMutation, useQuery } from "@tanstack/react-query";
import EditIcon from "@mui/icons-material/Edit";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const getProducts = async (limit, page, order) => {
  const res = await axios.get("/api/product", {
    params: {
      limit,
      page,
      order,
    },
  });
  return res.data;
};

const deleteProduct = async (id) => {
  const res = await axios.delete(`/api/product/${id}`);
  return res.data;
};

export default function DashboardProducts() {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(8);

  const handleChangePage = (event, newPage) => {
    setPage(newPage + 1);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1);
  };
  const { data, isSuccess, refetch } = useQuery({
    queryKey: ["products", rowsPerPage, page],
    queryFn: () => getProducts(rowsPerPage, page),
  });

  const mutation = useMutation({
    mutationFn: (id) => deleteProduct(id),
    onSuccess: (res) => {
      refetch();
      console.log(res);
      toast(res.message, {
        type: "success",
      });
    },
  });
  return (
    <TableContainer component={Paper}>
      <Button
        variant="contained"
        onClick={() => {
          navigate("/dashboard/products/add");
        }}
      >
        Add Product
      </Button>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* student-todo: add skeleton on isloading */}
          {data?.data.map(({ _id, name, price, image }) => (
            <TableRow
              key={_id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Avatar src={`http://localhost:3000/${image}`} alt={name} />
                  <Typography sx={{ ml: 2 }}> {name}</Typography>
                </Box>
              </TableCell>
              <TableCell align="right">{price} $</TableCell>
              <TableCell align="right">
                <IconButton
                  aria-label="delete"
                  color="error"
                  onClick={() => mutation.mutate(_id)}
                >
                  <DeleteIcon />
                </IconButton>
                <IconButton
                  aria-label="delete"
                  onClick={() => navigate(`/dashboard/products/edit/${_id}`)}
                >
                  <EditIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
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
    </TableContainer>
  );
}

// ui.ecoomer.com (cookie = token) => api call (cookie)
// api.ecommer.com  /sign-in (cookeset) readonly
