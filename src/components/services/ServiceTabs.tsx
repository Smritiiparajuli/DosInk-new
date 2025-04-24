export const ServiceTabs = () => {
  return (
    <div className="mb-10 z-100">
      <div className="text-sm text-center text-primary border-b-2 border-primary/20 uppercase font-semibold">
        <ul className="flex flex-wrap justify-center -mb-px">
          {["Advisory", "Implementation", "Big data and AI", "CRM"].map(
            (label, idx) => (
              <li key={idx} className="w-1/2 sm:w-auto">
                <a
                  href="#"
                  className="block px-4 py-4 text-center sm:px-8 md:px-13 lg:px-18 xl:px-28 border-b-3 border-transparent hover:border-primary"
                >
                  {label}
                </a>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};
