import { FaFacebook, FaGithub, FaReddit } from "react-icons/fa";

interface SocialLink {
  platform: string;
  Icon: React.ComponentType<{ className?: string }>;
}

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
}

const teamMembers = [
  {
    name: "ABCD",
    role: "UI/UX Developer",
    image:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
  },
  {
    name: "EFGH",
    role: "Lead Developer",
    image:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
  },
  {
    name: "IJKL",
    role: "Salesforce Administrator",
    image:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
  },
  {
    name: "MNOP",
    role: "Salesforce Developer",
    image:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
  },
];

const socialLinks = [
  { platform: "Reddit", Icon: FaReddit },
  { platform: "Facebook", Icon: FaFacebook },
  { platform: "Github", Icon: FaGithub },
];

const SocialIcon = ({ platform, Icon }: SocialLink) => (
  <a href="#" className="mx-2 hover:text-gray-500" aria-label={platform}>
    <Icon className="w-6 h-6" />
  </a>
);

const TeamMember = ({ name, role, image }: TeamMemberProps) => (
  <div className="flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer group hover:bg-secondary rounded-xl">
    <img
      className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
      src={image}
      alt={name}
    />
    <h1 className="mt-4 text-2xl font-semibold capitalize">{name}</h1>
    <p className="mt-2 capitalize">{role}</p>
    <div className="flex mt-3 -mx-2">
      {socialLinks.map((social) => (
        <SocialIcon key={social.platform} {...social} />
      ))}
    </div>
  </div>
);

export const Team = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center capitalize lg:text-3xl">
          Our Executive Team
        </h1>
        <p className="max-w-2xl mx-auto my-6 text-center">
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
