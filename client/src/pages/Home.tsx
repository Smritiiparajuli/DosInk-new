import { AuroraTypingAnimation } from "@/components/magicui/aurora-typing-animation";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Button } from "@/components/ui/button";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <AuroraBackground className="min-h-[calc(100vh-100px)] relative z-0">
        <div className="p-20 pt-0 text-primary flex items-center justify-center text-center z-10 relative mt-30">
          <p>
            <TypingAnimation
              as="span"
              className="inline text-5xl sm:text-6xl md:text-7xl tracking-tighter"
              duration={100}
            >
              We craft&nbsp;
            </TypingAnimation>

            <AuroraTypingAnimation
              as="span"
              className="inline text-5xl sm:text-6xl md:text-7xl tracking-tighter"
              delay={1000}
            >
              solutions&nbsp;
            </AuroraTypingAnimation>

            <TypingAnimation
              as="span"
              className="inline text-5xl sm:text-6xl md:text-7xl tracking-tighter"
              delay={2000}
            >
              for the start of every digital journey.
            </TypingAnimation>
          </p>
        </div>

        <div className="flex items-center justify-center gap-x-6 z-10 relative">
          <div className="relative inline-flex group">
            <div className="absolute pointer-events-none transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
            <Link
              to="/login"
              className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 cursor-pointer"
              role="button"
            >
              Get Started
            </Link>
          </div>
          <Link to="/services">
            <Button
              variant={"link"}
              className="flex items-center gap-2 px-8 py-4 text-lg text-primary cursor-pointer z-10"
            >
              Explore more
              <LiaLongArrowAltRightSolid />
            </Button>
          </Link>
        </div>
      </AuroraBackground>
    </>
  );
};
