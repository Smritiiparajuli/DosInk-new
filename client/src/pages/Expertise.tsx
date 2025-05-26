import { AuroraText } from "@/components/magicui/aurora-text";

interface TeamMemberProps {
  name: string;
  image: string;
}

const teamMembers = [
  {
    name: "Data Cloud Consultant",
    image:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
  },
  {
    name: "Service Cloud Consultant",
    image:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
  },
  {
    name: "Salesforce Administrator",
    image:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
  },
  {
    name: "Salesforce Developer",
    image:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
  },
];

const TeamMember = ({ name, image }: TeamMemberProps) => (
  <div className="flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer group hover:bg-secondary rounded-xl">
    <img
      className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
      src={image}
      alt={name}
    />
    <h1 className="mt-4 text-xl font-semibold capitalize">{name}</h1>
  </div>
);

export const Expertise = () => {
  return (
    <section className="bg-white dark:bg-gray-900 min-h-screen">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-bold text-center capitalize lg:text-5xl">
          Dosink's{" "}
          <AuroraText colors={["#b0c7d9", "#7d7e80", "#ece4d1", "#393940"]}>
            {" "}
            Expertise
          </AuroraText>
        </h1>
        <p className="max-w-2xl mx-auto my-6 text-center italic">
          A team of creative, approachable professionals committed to delivering
          effective solutions for our clients. Dosink has been thoughtfully
          crafted and continuously improved by this passionate group over the
          years.
        </p>
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
          {teamMembers.map((member) => (
            <TeamMember key={member.name} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};
