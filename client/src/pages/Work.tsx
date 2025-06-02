import { MorphingText } from "@/components/magicui/morphing-text";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const servicesList = [
  {
    topic: "DosInk Loyalty CRM",
    paragraph:
      "Loyalty, Reimagined. Meet DosInk—a lightweight, intelligent CRM built for modern loyalty. Fast to launch. Easy to use. Fully adaptable. With industry best practices baked in, you can get started in minutes. Want more control? Customize every element to fit your brand and strategy. From smart points programs to customer insights, DosInk delivers what matters: real engagement and lasting loyalty.",
    points: [
      "Streamlined, intuitive interface",
      "Preconfigured with proven best practices",
      "Fully customizable architecture",
      "Built to scale with your business",
      "Data-driven tools for deeper insights",
    ],
    image: "/images/green-tshirt.png",
  },
  {
    topic: "Salesforce Marketing Cloud & Omnichannel Solutions",
    paragraph:
      "Ready to transform how you connect with your customers? We help brands unlock the full power of Salesforce Marketing Cloud and Omnichannel engagement—so every message, across every channel, feels seamless and personal. From strategy to implementation, our experts craft intelligent marketing ecosystems that align data, content, and journeys to drive real results. Whether it’s email, mobile, social, web, or in-store—deliver connected experiences that keep your customers coming back.",
    points: [
      "Full-stack Salesforce Marketing Cloud setup & optimization",
      "Omnichannel journey design & automation",
      "Data integration across all customer touchpoints",
      "Scalable, future-proof marketing architecture",
      "Ongoing support, training & innovation",
    ],
    image: "/images/girl-computer.png",
  },
  {
    topic: "Salesforce Service Cloud Services",
    paragraph:
      "Where Service Meets Sophistication. Elevate every interaction with the power of Salesforce Service Cloud—the world’s leading platform for intelligent customer support. We help you craft personalized, seamless service experiences by unifying all customer touchpoints into one elegant digital ecosystem. From smart automation to intuitive workflows, your operations become smoother, faster, and effortlessly connected.",
    points: [
      "Seamless implementation of Salesforce Service Cloud",
      "Intelligent workflow design for operational efficiency",
      "Omnichannel support integration",
      "Scalable solutions for enterprise growth",
      "Tailored configurations to reflect your service philosophy",
    ],
    image: "/images/boy-cloud.png",
  },
];

export const Work = () => {
  return (
    <section className="pb-10 px-2 flex flex-col items-center min-[360px]:px-4 sm:px-10 md:px-20 mx-auto z-10 bg-gradient-to-t from-[#adc7d6] to-white dark:bg-gradient-to-b dark:from-background dark:to-gray-900 min-h-screen">
      <div className="p-4 md:p-10 w-full text-center mx-auto">
        <MorphingText
          texts={["Built for You,", "Focused on Results."]}
          className="md:mb-24 w-full text-3xl mb-16 max-[320px]:text-2xl sm:text-5xl sm:mb-20 lg:text-6xl tracking-tight font-semibold leading-tighter text-primary"
        />
        <p className="italic">
          Your CRM should work as hard as you do. <br />
          We craft CRM systems that are strategic, scalable, and simply
          effective.
        </p>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        orientation="horizontal"
        className="w-full"
      >
        <CarouselContent className="-mt-1 flex items-center">
          {servicesList.map((element, index) => (
            <CarouselItem
              key={index}
              className="pt-1 basis-1/1 md:basis-1/2 xl:basis-1/3"
            >
              <div className="p-2">
                <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 pt-0">
                  <img
                    src={element.image}
                    className="rounded-lg w-full h-80 object-cover"
                  />
                  <CardContent className="flex flex-col px-6 pb-6">
                    <div className="flex items-center mb-4">
                      <h3 className={`font-bold text-lg`}>{element.topic}</h3>
                    </div>
                    <p className={`text-justify mb-4 text-sm`}>
                      {element.paragraph}
                    </p>
                    <ul className="space-y-2">
                      {element.points.map((point, idx) => (
                        <li
                          key={idx}
                          className={`flex items-start text-[clamp(0.75rem,2vw,0.875rem)]`}
                        >
                          <svg
                            className="w-5 h-5 mr-2 mt-1 flex-shrink-0 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="mt-4 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600" />
        <CarouselNext className="mb-4 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600" />
      </Carousel>
    </section>
  );
};
