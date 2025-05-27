import { MagicCard } from "../magicui/magic-card";
import { Cloud, Wrench, Earth } from "lucide-react";

export const HomeServices = () => {
  return (
    <section className="p-2 min-[360px]:px-4 sm:px-10 md:px-20 mx-auto z-10">
      <div className="flex flex-col md:flex-row justify-between p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 gap-4 md:gap-6 lg:gap-8 xl:gap-10">
        <div className="w-full md:w-5/12 lg:w-1/3 xl:w-1/3 text-center">
          <h3 className="mb-2 text-lg font-semibold dark:text-[#FF9800] text-[#F4A261]">
            WHY US?
          </h3>
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-semibold text-primary max-w-sm mx-auto">
            We’re experts in turning ideas into impact.
          </h2>
        </div>

        <p className="w-full md:w-7/12 lg:w-2/3 xl:w-2/3 text-sm sm:text-base md:text-base lg:text-lg xl:text-lg text-muted-foreground max-w-2xl mx-auto text-center mt-4 md:mt-0">
          From concept to completion, we bring clarity, creativity, and purpose
          to every project. We turn your ideas into reality through smart design
          and tech. By understanding your goals and listening to your needs, we
          create solutions that resonate. With us, it’s a passionate
          partnership, driven by your vision and supported every step of the
          way.
        </p>
      </div>

      <div className="container px-6 py-10 mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <MagicCard className="flex flex-col items-center justify-center p-6 rounded-md">
            <Cloud className="m-auto mb-4" size={50} color="#00A1E0" />
            <h1 className="text-xl font-semibold text-gray-800 dark:text-white text-center">
              Salesforce CRM Packaged Solutions
            </h1>

            <p className="mt-2 text-gray-500 dark:text-gray-400 text-center tracking-wider">
              Empower your business with ready-to-deploy Salesforce CRM
              solutions tailored to your industry. Streamline operations, boost
              customer engagement, and accelerate growth with minimal setup and
              maximum impact.
            </p>
          </MagicCard>

          <MagicCard className="flex flex-col items-center justify-center p-6 rounded-md ">
            <Wrench className="m-auto mb-4" size={50} color="#5A5A5A" />
            <h1 className="text-xl font-semibold text-gray-800 dark:text-white text-center">
              Fully Customizable CRM Components
            </h1>

            <p className="mt-2 text-gray-500 dark:text-gray-400 text-center tracking-wider ">
              Get pre-built yet flexible Salesforce components that adapt to
              your workflows. From Sales Cloud to Service Cloud, configure and
              extend modules to suit your unique business processes.
            </p>
          </MagicCard>

          <MagicCard className="flex flex-col items-center justify-center p-6 rounded-md">
            <Earth className="m-auto mb-4" size={50} color="#4CAF50" />
            <h1 className="text-xl font-semibold text-gray-800 dark:text-white text-center">
              Multilingual and Region-Specific Support
            </h1>

            <p className="mt-2 text-gray-500 dark:text-gray-400 text-center tracking-wider">
              Deliver seamless user experiences globally with built-in support
              for RTL (right-to-left) languages and localized configurations.
              Salesforce’s internationalization features ensure you're ready for
              every market.
            </p>
          </MagicCard>
        </div>
      </div>
    </section>
  );
};
