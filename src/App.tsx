import { Outlet } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { ThemeProvider } from "./context/ThemeContext";
const App = () => {
  return (
    <>
      <ThemeProvider>
        <Header />
        <Outlet />
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
