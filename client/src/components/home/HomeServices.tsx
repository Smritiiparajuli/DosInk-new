import { MagicCard } from "../magicui/magic-card";

export const HomeServices = () => {
  return (
    <section className="mt-10 mb-20 p-2 min-[360px]:px-4 sm:px-10 md:px-20 mx-auto z-10">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <MagicCard className="flex flex-col items-center justify-center p-6 rounded-md">
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

          <MagicCard className="flex flex-col items-center justify-center p-6 rounded-md">
            <h1 className="text-xl font-semibold text-gray-800 dark:text-white text-center">
              Fully Customizable CRM Components
            </h1>

            <p className="mt-2 text-gray-500 dark:text-gray-400 text-center tracking-wider">
              Get pre-built yet flexible Salesforce components that adapt to
              your workflows. From Sales Cloud to Service Cloud, configure and
              extend modules to suit your unique business processes—no heavy
              coding required.
            </p>
          </MagicCard>

          <MagicCard className="flex flex-col items-center justify-center p-6 rounded-md">
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
