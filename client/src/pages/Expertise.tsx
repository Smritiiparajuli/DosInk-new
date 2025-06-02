import { AuroraText } from "@/components/magicui/aurora-text";
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";

enum CircleType {
  Inner = "inner",
  Outer = "outer",
}

type LogoImageProps = {
  name: string;
  image: string;
  circle: CircleType;
};

const logos: LogoImageProps[] = [
  {
    name: "Data Cloud Consultant",
    image: "/images/dataCloudConsultant.png",
    circle: CircleType.Outer,
  },

  {
    name: "Salesforce Administrator",
    image: "/images/administrator.png",
    circle: CircleType.Inner,
  },
  {
    name: "Service Cloud Consultant",
    image: "/images/serviceCloudConsultant.png",
    circle: CircleType.Outer,
  },
];

const LogoImage = ({ name, image }: LogoImageProps) => {
  return <img src={image} alt={name} />;
};

export const Expertise = () => {
  return (
    <section className="bg-gradient-to-t from-[#adc7d6] to-white dark:bg-gradient-to-b dark:from-background dark:to-gray-900 min-h-screen">
      <div className="container px-6 py-10 mx-auto flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-center capitalize lg:text-6xl">
          Dosink's{" "}
          <AuroraText colors={["#f6c002", "#342b9b", "#1a9bd7"]}>
            {" "}
            Specialization
          </AuroraText>
        </h1>
        <p className="max-w-2xl mx-auto mt-6 text-center italic text-lg">
          A team of creative, approachable professionals committed to delivering
          effective solutions for our clients. Dosink has been thoughtfully
          crafted and continuously improved by this passionate group over the
          years.
        </p>
      </div>

      <div className="relative flex h-[580px] w-full flex-col items-center justify-center overflow-hidden">
        {/* <OrbitingCircles radius={230} iconSize={80} path={false}>
          {logos
            .filter((logo) => logo.circle === CircleType.Outer)
            .map((logo) => (
              <LogoImage key={logo.name} {...logo} />
            ))}
        </OrbitingCircles> */}
        <OrbitingCircles iconSize={100} radius={200} speed={0.75} path>
          {logos
            // .filter((logo) => logo.circle === CircleType.Inner)
            .map((logo) => (
              <LogoImage key={logo.name} {...logo} />
            ))}{" "}
        </OrbitingCircles>
        <OrbitingCircles iconSize={100} radius={1}>
          <img src="/images/partner.png" alt="Partner" />
        </OrbitingCircles>
      </div>
    </section>
  );
};
