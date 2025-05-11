export const HomeImageSection = () => {
  return (
    <div className="lg:flex">
      <div className="flex w-full items-center justify-center px-6 py-8 lg:h-full lg:w-1/2">
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold text-primary lg:text-4xl">
            We’re experts in turning ideas into impact.
          </h2>

          <p className="mt-12 text-md lg:text-base text-muted-foreground">
            From the first sketch to the final delivery, we approach every
            project with clarity, creativity, and purpose. We are experts at
            shaping your thoughts into reality. Our work is driven by a belief
            that great design and smart technology can transform the way people
            live and work. We take the time to understand your goals, listen to
            your needs, and deliver solutions that truly resonate. With us, it's
            not just a project, it’s a partnership and a passion. We’re by your
            side 24/7, always focused on bringing your vision to life and moving
            success closer with every step.
          </p>
        </div>
      </div>

      <div className="h-64 w-full lg:h-auto lg:w-1/2 flex items-center justify-center">
        <img
          className="h-full w-auto object-contain"
          src="/images/homeimage.jpg"
          alt="Home Image"
        />
      </div>
    </div>
  );
};
