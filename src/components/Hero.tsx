import MatrixBackground from "./MatrixBackground";

const Hero = () => {
  const greetings = "<Hi, i'm Jonas 👋>";
  const passion = "<Specializing in crafting modern, responsive and user-friendly Frontends and making safety and scalable Backends. />";

  return (
    <section className="relative flex items-center justify-center py-35 w-full border-y-1 border-text-rgba">
      <MatrixBackground />
      <div className="flex flex-col items-center justify-center px-4">
        <p>{greetings}</p>
        <h1 className="text-orange-500">Web-Full-Stack Developer</h1>
        <p>{passion}</p>
      </div>
    </section>
  );
};

export default Hero;
