import { useState } from "react";

const services = [
  {
    id: 1,
    label: "Evaluate",
    source: "/images/evaluate.png",
    heading: "We Help Build Smarter Systems with Clarity, Speed & Vision",
    paragraph:
      "We strive to provide razor-sharp analysis of your tech reality and bold ambitions to ignite your journey. When your systems are faltering or you’re ready to pivot but the path feels unclear, we dive deep.  We’re not just here to fix things. We’re here to reimagine them. Whether you’re scaling, rebuilding, or launching from scratch, we aim to bring clarity, speed, and precision. No guesswork, no fluff.  We believe every challenge tells a story. We listen hard, then act fast. Our team blends creative frontend vision with bulletproof backend logic.",
  },
  {
    id: 2,
    label: "Build",
    source: "/images/guide.png",
    heading: "We Help You Reimagine, Rebuild, and Scale with Precision",
    paragraph:
      "We immerse ourselves from the initial concept to the final launch. For every step of the journey, we stand by your side, from crafting the architecture, constructing with precision, testing rigorously, to deploying seamlessly. For projects demanding intense focus or tight deadlines, we commit fully by collaborating with your team or taking the lead to deliver results with full dedication. Our focus isn’t just on creating solutions for today, but on building systems that thrive under pressure tomorrow.",
  },
  {
    id: 3,
    label: "Guide",
    source: "/images/guide.png",
    heading: "We Help You Navigate with Confidence",
    paragraph:
      "Our goal is to help you drive you toward victory by navigating through every hurdle with the best expertise we can. Through intensive admin training and unwavering strategic guidance in system design, marketing, and analytics, we supercharge your team’s potential. With our mastery at your side, you’ll command your tech future with absolute confidence.",
  },
];

export const ServiceTabs = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const activeService = services.find((s) => s.id === activeIndex);
  return (
    <div>
      <div className="z-100">
        <div className="text-sm text-center text-primary uppercase font-semibold">
          <ul className="flex flex-wrap justify-center -mb-px">
            {services.map((element) => (
              <li key={element.id} className="w-1/2 sm:w-auto">
                <div
                  className={`block px-4 py-4 text-center sm:px-8 md:px-13 lg:px-18 xl:px-28 border-b-3 cursor-pointer hover:border-primary ${
                    activeIndex === element.id
                      ? "border-primary"
                      : "border-transparent"
                  }`}
                  onClick={() => setActiveIndex(element.id)}
                >
                  {element.label}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="gap-8 items-center py-4 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-8 lg:px-6 z-100">
        <img
          className="w-full"
          src={activeService?.source}
          alt={activeService?.label}
        />
        <div className="mt-4 md:mt-0 flex flex-col gap-8">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold">
            {activeService?.heading}
          </h2>
          <p className="mb-6 font-light whitespace-pre-line">
            {activeService?.paragraph}
          </p>
        </div>
      </div>
    </div>
  );
};
