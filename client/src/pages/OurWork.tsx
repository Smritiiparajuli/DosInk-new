import { LineShadowText } from "@/components/magicui/line-shadow-text";
import { ServiceTabs } from "@/components/services/ServiceTabs";
import { useTheme } from "@/context/ThemeContext";

export const OurWork = () => {
  const { theme } = useTheme();
  return (
    <>
      <div className="p-10 sm:p-30 sm:pb-16 bg-white dark:bg-gray-900 min-h-[calc(100vh-100px)]">
        <div className="mx-auto max-w-screen-lg text-center">
          <h2 className="mb-12 text-3xl sm:text-6xl tracking-tight font-semibold leading-tighter text-primary z-100">
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
            strategic planning and custom development to seamless implementation
            and ongoing support, we partner with you to create solutions that
            are not only effective but built with purpose.
          </p>
          <p className="font-medium mr-2 mb-2 text-lg italic text-primary">
            Let’s connect to craft a solution that truly aligns with your
            vision and goals.
          </p>
        </div>
      </div>

      <ServiceTabs />
    </>
  );
};
