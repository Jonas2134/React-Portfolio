import About from "./About";

const Hero = () => {
  return (
    <section className="inline-grid grid-cols-2 gap-4 ">
      <About />
      <main className="rounded-4xl inset-shadow-[0_0_10px_1px_rgba(0,0,0,0.1)] backdrop-blur-md p-7">
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
          deserunt. Nobis nesciunt unde quia aut eum repudiandae, deserunt illo
          at delectus, officia, nemo itaque quibusdam officiis eveniet
          architecto molestiae incidunt?
        </span>
      </main>
    </section>
  );
};

export default Hero;
