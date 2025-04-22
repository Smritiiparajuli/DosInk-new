import { AuroraText } from "@/components/magicui/aurora-text";
import { TypingAnimation } from "@/components/magicui/typing-animation";

export const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-146px)] p-20">
      <TypingAnimation className="text-7xl">
        We craft solutions for the start of every digital journey.
      </TypingAnimation>
      <AuroraText> TRIAL </AuroraText>
    </div>
  );
};
