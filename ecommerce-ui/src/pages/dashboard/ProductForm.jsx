import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import Alert from "@mui/material/Alert";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

const schema = yup
  .object({
    name: yup.string().required(),
    price: yup.number().required(),
    featured: yup.boolean(),
  })
  .required();

const addOrUpdateProduct = async (data, productId) => {
  const formData = new FormData();
  formData.append("name", data.name);
  formData.append("price", data.price);
  formData.append("featured", data.featured);

  if (data.image[0]) {
    formData.append("image", data.image[0]);
  }

  if (productId) {
    const res = await axios.patch(`/api/product/${productId}`, formData);
    return res.data;
  }

  const res = await axios.post("/api/product", formData);
  return res.data;
};

const getProduct = async (productId) => {
  const res = await axios.get(`/api/product/${productId}`);
  return res.data.data;
};

export default function ProductForm() {
  const [previewImg, setPreviewImg] = useState();
  const navigate = useNavigate();
  const { productId } = useParams();

  const action = productId ? "Edit" : "Add";

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const mutation = useMutation({
    mutationFn: (data) => addOrUpdateProduct(data, productId),
    onSuccess: (res) => {
      navigate("/dashboard/products");
      toast(res.message, {
        type: "success",
      });
    },
  });

  const query = useQuery({
    queryKey: ["products", productId],
    queryFn: () => getProduct(productId),
    enabled: Boolean(productId),
  });

  useEffect(() => {
    if (query.isSuccess) {
      setValue("name", query.data.name);
      setValue("price", query.data.price);
      setValue("featured", query.data.featured);
    }
  }, [query.isSuccess]);

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  // <input type="email" name="email" onChange={handleChange} />
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
          {action} Product
        </Typography>
        {mutation.error && (
          <Alert sx={{ my: 2 }} severity="error">
            {mutation.error.response.data.message}
          </Alert>
        )}

        <Box
          component="form"
          noValidate
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            gap: 2,
          }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <FormControl>
            <FormLabel htmlFor="name">Name</FormLabel>
            <TextField
              id="name"
              type="text"
              name="name"
              autoComplete="name"
              fullWidth
              variant="outlined"
              error={Boolean(errors.name)}
              helperText={errors.name?.message}
              {...register("name")}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="image">Image</FormLabel>
            <input
              type="file"
              id="image"
              {...register("image")}
              onChange={(e) => {
                const url = URL.createObjectURL(e.target.files[0]);
                setPreviewImg(url);
              }}
            />
            {(previewImg || query?.data?.image) && (
              <Box
                component="img"
                src={
                  previewImg
                    ? previewImg
                    : `http://localhost:3000/${query.data.image}`
                }
                sx={{ width: "200px", mt: 2 }}
              />
            )}
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="price">Price</FormLabel>
            <TextField
              id="price"
              type="number"
              price="price"
              autoComplete="price"
              fullWidth
              variant="outlined"
              error={Boolean(errors.price)}
              helperText={errors.price?.message}
              {...register("price")}
            />
          </FormControl>
          <FormControlLabel
            control={<Checkbox {...register("featured")} />}
            label="Featured"
          />

          <Button type="submit" fullWidth variant="contained">
            {action} Product
          </Button>
        </Box>
      </Card>
    </Stack>
  );
}
