import { ReactNode } from "react";

export const Onepage = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-[calc(100vh-100px)] px-2 min-[360px]:px-4 sm:px-6 md:px-8 mx-auto lg:px-12 xl:px-16">
      {children}
    </div>
  );
};
