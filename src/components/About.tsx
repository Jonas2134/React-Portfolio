import picture from "../assets/img/jonas-stiefer.png";

function getAge(): number {
  const birthDate = new Date(1999, 7, 9);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  const d = today.getDate() - birthDate.getDate();

  if (m < 0 || (m === 0 && d < 0)) {
    age--;
  }

  return age;
}

const About = () => {
  return (
    <aside className="flex gap-4 rounded-4xl inset-shadow-[0_0_10px_1px_rgba(0,0,0,0.1)] backdrop-blur-md p-7">
      <section className="max-w-md">
        <h2>Hi, i'm Jonas 👋</h2>
        <p>
          I'm <strong>{getAge()}</strong> years old and i'm an emerging{" "}
          <strong>Web-Full-Stack Developer!</strong> <br />I come from{" "}
          <strong>Luxembourg</strong> and i'm motivated to take on your
          challenges.
        </p>
      </section>
      <img src={picture} alt="My Picture" className="rounded-4xl h-56" />
    </aside>
  );
};

export default About;
