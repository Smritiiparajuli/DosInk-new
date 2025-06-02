import { LineShadowText } from "@/components/magicui/line-shadow-text";
import { ServiceTabs } from "@/components/services/ServiceTabs";
import { useTheme } from "@/context/ThemeContext";

export const Services = () => {
  const { theme } = useTheme();
  return (
    <div className="bg-gradient-to-t from-[#adc7d6] to-white dark:bg-gradient-to-b dark:from-background dark:to-gray-900 min-h-screen">
      <div className="p-10 sm:pb-16">
        <div className="mx-auto max-w-screen-lg text-center">
          <h2 className="mb-8 text-3xl sm:text-6xl tracking-tight font-semibold leading-tighter text-primary z-100">
            Delivering{" "}
            <LineShadowText
              className="italic"
              shadowColor={theme == "dark" ? "white" : "black"}
            >
              Comprehensive
            </LineShadowText>{" "}
            IT Solutions
          </h2>
          <p className="italic">
            Our IT company is committed to delivering exceptional services
            through innovative solutions, prompt support, and a client-first
            approach. We strive to exceed expectations by ensuring reliability,
            efficiency, and continuous improvement in everything we do.
          </p>
        </div>
      </div>

      <ServiceTabs />
    </div>
  );
};
