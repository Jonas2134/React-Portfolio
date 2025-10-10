import MatrixBackground from "./MatrixBackground";

const Hero = () => {
  const greetings = "<Hi, i'm Jonas 👋>";
  const passion = "<Specializing in crafting modern, responsive and user-friendly Frontends and making safety and scalable Backends. />";

  return (
    <section className="relative flex items-center justify-center py-30 w-full border-y-1 border-text-rgba">
      <MatrixBackground />
      <main className="flex flex-col items-center justify-center px-4">
        <h3>{greetings}</h3>
        <h1 className="text-orange-500">Web-Full-Stack Developer</h1>
        <p>{passion}</p>
      </main>
    </section>
  );
};

export default Hero;
