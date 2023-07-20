import { ThemeProvider } from "styled-components";
import { createBrowserRouter,  RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import NewPage from "./pages/New";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  const theme = {
    primary: "#322153",
    secondary: "#6C63FF",
    background: "#F0F0F5",
    label: "#6C6C80",
    white: "#FFFFFF",
  };

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/new",
    element: <NewPage />,
  },
]);

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    <ToastContainer />
    </ThemeProvider>
  )
}

export default App
