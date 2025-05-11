import { Onepage } from "@/components/container/Onepage";
import { HomeImageSection } from "@/components/home/HomeImageSection";
import { HomeServices } from "@/components/home/HomeServices";
import { AuroraTypingAnimation } from "@/components/magicui/aurora-typing-animation";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { Button } from "@/components/ui/button";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <Onepage>
        <div className="text-primary text-center z-10 relative flex justify-center mb-20 mt-35">
          <p>
            <TypingAnimation
              as="span"
              className="inline text-3xl min-[360px]:text-5xl sm:text-6xl md:text-7xl tracking-tighter"
              duration={50}
            >
              We craft&nbsp;
            </TypingAnimation>

            <AuroraTypingAnimation
              as="span"
              className="inline text-3xl min-[360px]:text-5xl sm:text-6xl md:text-7xl tracking-tighter"
              delay={500}
              duration={50}
            >
              solutions&nbsp;
            </AuroraTypingAnimation>

            <TypingAnimation
              as="span"
              className="inline text-3xl min-[360px]:text-5xl sm:text-6xl md:text-7xl tracking-tighter"
              delay={1000}
              duration={50}
            >
              for the start of every digital journey.
            </TypingAnimation>
          </p>
        </div>

        <div className="flex items-center justify-center gap-x-6 z-10 relative">
          <div className="relative inline-flex group">
            <div className="absolute pointer-events-none transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
            <Link
              to="/contact"
              className="relative inline-flex items-center justify-center px-4 py-4 min-[360px]:px-8 min-[360px]:py-4 text-sm min-[360px]:text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 cursor-pointer"
              role="button"
            >
              Get Started
            </Link>
          </div>
          <Link to="/services">
            <Button
              variant={"link"}
              className="flex items-center gap-2 px-8 py-4 text-sm min-[360px]:text-lg text-primary cursor-pointer z-10"
            >
              Explore more
              <LiaLongArrowAltRightSolid />
            </Button>
          </Link>
        </div>
      </Onepage>

      <HomeImageSection />
      <HomeServices />
    </>
  );
};
