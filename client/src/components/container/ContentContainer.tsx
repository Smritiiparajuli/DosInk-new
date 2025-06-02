import { ReactNode } from "react";

export const ContentContainer = ({ children }: { children: ReactNode }) => {
  return <div className="pt-[70px] md:pt-[100px]">{children}</div>;
};
