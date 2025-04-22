import { Outlet } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { ThemeProvider } from "./context/ThemeContext";
const App = () => {
  return (
    <>
      <ThemeProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Outlet />
          </main>
        </div>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
