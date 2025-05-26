import { Header } from "@/components/header/Header";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <AuroraBackground className="flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
    </AuroraBackground>
  );
};

export default HomeLayout;
