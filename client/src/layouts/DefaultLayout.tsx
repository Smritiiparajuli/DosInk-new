import { Header } from "@/components/header/Header";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
    </>
  );
};

export default DefaultLayout;
