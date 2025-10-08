import MatrixTerminal from "./MatrixTerminal";

const Hero = () => {
  return (
    <section className="flex gap-4 w-full">
      <main className="flex flex-col items-center justify-center">
        <h3>Hi, i'm Jonas 👋</h3>
        <h1 className="text-orange-500">Web-Full-Stack Developer</h1>
        <p>
          Specializing in crafting modern, responsive and user-friendly Frontends and making safety and scalable Backends.
        </p>
      </main>
      <MatrixTerminal />
    </section>
  );
};

export default Hero;
