import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import SignUp from "./pages/signUp/SignUp";
import Login from "./pages/login/Login";
import Transactions from "./pages/transactions/Transactions";

function App() {
  const routes = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/hotels", element: <List /> },
    { path: "/hotels/:hotelId", element: <Hotel /> },
    { path: "/sign-up", element: <SignUp /> },
    { path: "/login", element: <Login /> },
    { path: "/transactions", element: <Transactions /> },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
