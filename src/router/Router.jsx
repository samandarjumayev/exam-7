import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ProtectedRouter from "../protected/ProtectedRouter";
import Login from "../auth/Login";
import Home from "../components/Home";
import Categories from "../components/Categories";
import Dashboard from "../components/Dashboard";
import AllProducts from "../components/AllProducts";
import Cart from "../components/Cart";
import Users from "../components/Users";
import About from "../components/About";
import SignUp from "../auth/SignUp";
import SingleUser from "../components/SingleUser";
import SingleProduct from "../components/SingleProduct";
import CategoryPage from "../components/CategoryPage";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/categories', element: <Categories /> },
      { path: '/categories/:category', element: <CategoryPage /> },
      { path: '/dashboard', element: (
        <ProtectedRouter>
          <Dashboard />
        </ProtectedRouter>
      ) },
      { path: '/all_products', element: <AllProducts /> },
      { path: '/all_products/:id', element: <SingleProduct /> },
      { path: '/cart', element: <Cart /> },
      { path: '/users', element: <Users /> },
      { path: '/users/:id', element: <SingleUser /> },
      { path: '/login', element: <Login /> },
      { path: '/signup', element: <SignUp /> }
    ]
  }
])