import { AuroraText } from "@/components/magicui/aurora-text";

interface TeamMemberProps {
  name: string;
  image: string;
}

const teamMembers = [
  {
    name: "Data Cloud Consultant",
    image: "/images/dataCloudConsultant.png",
  },

  {
    name: "Salesforce Administrator",
    image: "/images/administrator.png",
  },
  {
    name: "Service Cloud Consultant",
    image: "/images/serviceCloudConsultant.png",
  },
];

const TeamMember = ({ name, image }: TeamMemberProps) => (
  <div className="flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer group hover:bg-secondary rounded-xl">
    <img className="object-cover w-32 h-32" src={image} alt={name} />
    <h1 className="mt-4 text-xl font-semibold capitalize text-center">
      {name}
    </h1>
  </div>
);

export const Expertise = () => {
  return (
    <section className="bg-gradient-to-t from-[#adc7d6] to-white dark:bg-gradient-to-b dark:from-background dark:to-gray-900 min-h-screen">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-bold text-center capitalize lg:text-6xl">
          Dosink's{" "}
          <AuroraText colors={["#f6c002", "#342b9b", "#1a9bd7"]}>
            {" "}
            Specialization
          </AuroraText>
        </h1>
        <p className="max-w-2xl mx-auto my-6 text-center italic text-lg">
          A team of creative, approachable professionals committed to delivering
          effective solutions for our clients. Dosink has been thoughtfully
          crafted and continuously improved by this passionate group over the
          years.
        </p>
        <div className="grid gap-8 mt-8 xl:mt-16 grid-cols-[repeat(auto-fit,minmax(250px,1fr))] place-items-center">
          {teamMembers.map((member) => (
            <TeamMember key={member.name} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};
