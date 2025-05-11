import { ContactForm } from "@/components/forms/ContactForm";
import { Building, Mail, Phone } from "lucide-react";

export const Contact = () => {
  return (
    <>
      <div className="bg-white dark:bg-gray-900 grid lg:grid-cols-2 place-items-center min-h-[calc(100vh-100px)] gap-10 lg:gap-0 mt-10 lg:mt-0">
        <div className="mx-auto max-w-screen-xl">
          <div className="mx-auto px-8 text-center">
            <h2 className="mb-12 text-5xl sm:text-6xl tracking-tight font-semibold leading-tighter text-primary z-100">
              Get in touch
            </h2>
            <p className="mb-10 font-light text-secondary-foreground text-xl">
              Let’s build something great together. Whether you're launching a
              bold new startup or expanding an established enterprise, we’re
              here to turn your vision into reality. Let’s collaborate and
              create something remarkable.
            </p>

            <div className="flex flex-col gap-6 items-center justify-center">
              <div className="flex gap-4">
                <Building />
                <p>DOSINK MARKETING TECH CO. LTD. </p>
              </div>

              <div className="flex gap-4">
                <Phone />
                <p> +66 82 206 7085</p>
              </div>

              <div className="flex gap-4">
                <Mail />
                <p>support@dosink.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <ContactForm />
        </div>
      </div>
    </>
  );
};
