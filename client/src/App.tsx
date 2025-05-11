import { Outlet } from "react-router-dom";
import { Footer } from "./components/footer/Footer";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <Outlet />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
