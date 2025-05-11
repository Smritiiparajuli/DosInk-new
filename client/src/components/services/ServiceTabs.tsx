import { useState } from "react";

export const ServiceTabs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <div className="bg-primary-foreground">
        <div className="z-100">
          <div className="text-sm text-center text-primary uppercase font-semibold">
            <ul className="flex flex-wrap justify-center -mb-px">
              {["Advisory", "Implementation", "Big data and AI", "CRM"].map(
                (label, idx) => (
                  <li key={idx} className="w-1/2 sm:w-auto">
                    <a
                      href={`#${label}`}
                      className={`block px-4 py-4 text-center sm:px-8 md:px-13 lg:px-18 xl:px-28 border-b-3 hover:border-primary ${
                        activeIndex === idx
                          ? "border-primary"
                          : "border-transparent"
                      }`}
                      onClick={() => setActiveIndex(idx)}
                    >
                      {label}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        <div className="gap-8 items-center py-4 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-8 lg:px-6 z-100">
          <img
            className="w-full"
            src="/images/discussion.png"
            alt="Discussion"
          />
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold">
              Let's make strategic decisions together.
            </h2>
            <p className="mb-6 font-light">
              We help you make smarter decisions by aligning business goals with
              the right tech strategies. From planning to execution, we’re by
              your side to build a future-ready digital roadmap.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
