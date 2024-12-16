import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { useCart } from "../providers/CartProvider";
import Chip from "@mui/material/Chip";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import axios from "axios";
async function createOrder(data) {
  const res = await axios.post("/api/product/order", data);
  return res.data;
}

export default function Cart() {
  const { cart, handleDecrement, handleIncrement, total, resetCart } =
    useCart();

  const mutation = useMutation({
    mutationFn: (data) => createOrder(data),
    onSuccess: (res) => {
      console.log(res);
      //stripe url
      // url redirect
      // alert("order created succesfully");
      // resetCart();
      toast(res.message);
      resetCart();
      location.replace(res.paymentUrl);
    },
  });

  const handlePayment = () => {
    mutation.mutate({
      products: cart.map(({ _id, quantity }) => ({ _id, quantity })),
    });
  };

  return (
    <>
      <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
        Cart Items:
      </Typography>
      <List>
        {cart.map((product, index) => (
          <ListItem
            key={product._id}
            secondaryAction={
              <>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => handleDecrement(index)}
                >
                  <RemoveIcon />
                </IconButton>
                <Chip
                  color="primary"
                  variant="outlined"
                  label={product.quantity}
                  sx={{ ml: 1 }}
                />
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => handleIncrement(index)}
                >
                  <AddIcon />
                </IconButton>
              </>
            }
          >
            <ListItemAvatar>
              <Avatar src={`http://localhost:3000/${product.image}`} />
            </ListItemAvatar>
            <ListItemText
              primary={product.name}
              secondary={`$${product.price} x ${product.quantity} = $${
                product.price * product.quantity
              }`}
            />
          </ListItem>
        ))}
        <Typography>Total: $ {total}</Typography>
        <Button variant="contained" onClick={handlePayment}>
          Proceed to payment
        </Button>
      </List>
    </>
  );
}
