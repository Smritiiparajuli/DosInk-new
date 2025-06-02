import { Outlet } from "react-router-dom";
import { Footer } from "./components/footer/Footer";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <main className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <Outlet />
        </div>
        <Footer />
      </main>
    </ThemeProvider>
  );
};

export default App;
