const Hero = () => {
  return (
    <section className="inline-grid grid-cols-3 gap-4 ">
      <aside className="max-w-sm py-15">
        <h3>Hi, i'm Jonas 👋</h3>
        <h1 className="text-orange-500">Web-Full-Stack Developer</h1>
        <p>
          Specializing in crafting modern, responsive and user-friendly Frontends and making safety and scalable Backends.
        </p>
      </aside>
      <main className="rounded-4xl inset-shadow-[0_0_10px_1px_rgba(0,0,0,0.1)] backdrop-blur-md p-7 col-span-2">
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
