import { LineShadowText } from "@/components/magicui/line-shadow-text";
import { ServiceTabs } from "@/components/services/ServiceTabs";
import { useTheme } from "@/context/ThemeContext";

export const Services = () => {
  const { theme } = useTheme();
  return (
    <>
      <div className="p-10 sm:p-30 sm:pb-16 bg-white dark:bg-gray-900">
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
        </div>
      </div>

      <ServiceTabs />
    </>
  );
};
