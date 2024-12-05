import { BrowserRouter, Routes, Route } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Products from "./pages/Products";
import { AdminRoutes } from "./layouts/AdminRoutes";
import { ProtectedRoutes } from "./layouts/ProtectedRoutes";
import { HomeLayout } from "./layouts/HomeLayout";
import { GuestRoutes } from "./layouts/GuestRoute";
import { AuthProvider } from "./providers/AuthProvider";

const queryClient = new QueryClient();

// <AuthProveder> <navbar> </AuthPRoider>

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route element={<HomeLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route element={<ProtectedRoutes />}>
                <Route path="/orders" element={<h2>order page</h2>} />
                <Route path="/profile" element={<h2>profile page</h2>} />
              </Route>
              <Route element={<AdminRoutes />}>
                <Route path="/dashboard" element={<h2>Dashboard</h2>} />
                <Route path="/dashboard/users" element={<h2>Dashboard</h2>} />
                <Route
                  path="/dashboard/products"
                  element={<h2>Dashboard</h2>}
                />
                <Route path="/dashboard/orders" element={<h2>Dashboard</h2>} />
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
  );
}

export default App;

// products pagination, filtering, search, api pagination
// sign in sign up if authenticate redirect /
