import { BrowserRouter, Routes, Route } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Products from "./pages/Products";
import { AdminRoutes } from "./layouts/AdminRoutes";
import { ProtectedRoutes } from "./layouts/ProtectedRoutes";
import { HomeLayout } from "./layouts/HomeLayout";
import { GuestRoutes } from "./layouts/GuestRoute";
import { AuthProvider } from "./providers/AuthProvider";
import DashboardLayout from "./layouts/DashboardLayout";
import DashboardProducts from "./pages/dashboard/DashboardProducts";
import ProductForm from "./pages/dashboard/ProductForm";
import Cart from "./pages/Cart";
import Orders from "./pages/user/Orders";

const queryClient = new QueryClient();

// <AuthProveder> <navbar> </AuthPRoider>

function App() {
  return (
    <>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Routes>
              <Route element={<HomeLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route
                  path="success"
                  element={
                    <h2>Payment successful. we will deliver in few day.</h2>
                  }
                />
                <Route path="/cart" element={<Cart />} />
                <Route element={<ProtectedRoutes />}>
                  <Route path="/orders" element={<Orders />} />
                  <Route path="/profile" element={<h2>profile page</h2>} />
                </Route>
              </Route>
              <Route element={<AdminRoutes />}>
                <Route path="dashboard" element={<DashboardLayout />}>
                  <Route index element={<h2>Welcome to dashboard</h2>} />
                  <Route path="users" element={<h2>Dashboard Users</h2>} />

                  <Route path="products" element={<DashboardProducts />} />
                  <Route path="products/add" element={<ProductForm />} />
                  <Route
                    path="products/edit/:productId"
                    element={<ProductForm />}
                  />
                  <Route path="products" element={<DashboardProducts />} />
                  <Route path="orders" element={<h2>Dashboard</h2>} />
                </Route>
              </Route>

              <Route element={<GuestRoutes />}>
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </AuthProvider>
      <ToastContainer />
    </>
  );
}

export default App;

// products pagination, filtering, search, api pagination
// sign in sign up if authenticate redirect /
