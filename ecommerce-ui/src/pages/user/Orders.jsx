import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Chip from "@mui/material/Chip";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";

const STATUS_TO_COLOR = {
  pending: "info",
  completed: "success",
  cancelled: "error",
};

const getOrders = async (limit, page, status) => {
  const res = await axios.get("/api/product/orders", {
    params: {
      limit,
      page,
      status,
    },
  });
  return res.data;
};

export default function Orders() {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(8);
  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage + 1);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1);
  };
  const { data, isSuccess } = useQuery({
    queryKey: ["orders", rowsPerPage, page, status],
    queryFn: () => getOrders(rowsPerPage, page, status),
  });

  return (
    <TableContainer component={Paper}>
      <Box
        sx={{ minWidth: 120, my: 2, display: "flex", justifyContent: "end" }}
      >
        <FormControl sx={{ width: "400px" }}>
          <InputLabel id="demo-simple-select-label">Status:</InputLabel>
          <Select
            size="small"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={status}
            label="Status"
            onChange={handleChange}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value={"pending"}>Pending</MenuItem>
            <MenuItem value={"completed"}>Completed</MenuItem>
            <MenuItem value={"cancelled"}>Cancelled</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Order Id</TableCell>
            <TableCell align="right">Total</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* student-todo: add skeleton on isloading */}
          {data?.data.map(({ _id, total, status }) => (
            <TableRow
              key={_id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {_id}
              </TableCell>
              <TableCell align="right">${total} </TableCell>
              <TableCell align="right">
                <Chip label={status} color={STATUS_TO_COLOR[status]} />
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
