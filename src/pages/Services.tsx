import { LineShadowText } from "@/components/magicui/line-shadow-text";
import { ServiceTabs } from "@/components/services/ServiceTabs";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { useTheme } from "@/context/ThemeContext";

export const Services = () => {
  const { theme } = useTheme();
  return (
    <>
      <AuroraBackground className="min-h-[calc(100vh-100px)] relative z-0">
        <div className="mb-8 px-4 mx-auto max-w-screen-xl sm:pb-16 lg:px-6 mt-30">
          <div className="mx-auto max-w-screen-lg text-center">
            <h2 className="mb-12 text-5xl sm:text-6xl tracking-tight font-semibold leading-tighter text-primary z-100">
              Delivering{" "}
              <LineShadowText
                className="italic"
                shadowColor={theme == "dark" ? "white" : "black"}
              >
                Comprehensive
              </LineShadowText>{" "}
              IT Solutions
            </h2>
            <p className="mb-10 font-light text-secondary-foreground text-xl">
              At DosInk, we specialize in delivering end-to-end technology
              services designed to drive meaningful digital transformation. From
              strategic planning and custom development to seamless
              implementation and ongoing support, we partner with you to create
              solutions that are not only effective but built with purpose.
            </p>
            <p className="font-medium mr-2 mb-2 text-lg italic text-primary">
              Let’s connect to craft a solution that truly aligns with your
              vision and goals.
            </p>
          </div>
        </div>
        <ServiceTabs />
      </AuroraBackground>
    </>
  );
};
