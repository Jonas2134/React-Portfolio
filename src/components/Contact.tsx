import ContactNav from "./ContactNav";
import EmailForm from "./EmailForm";

const Contact = () => {
  const headline = "<Get in Touch />";

  return (
    <section id="contact" className="flex flex-col items-center gap-6">
      <h2 className="text-orange-500 ">{headline}</h2>
      <div className="grid grid-cols-2 divide-x divide-(--color-text-rgba) border border-(--color-text-rgba) w-full rounded shadow-md inset-shadow-card backdrop-blur-md">
        <ContactNav linkedinUrl="#" githubUrl="#" email="#" />
        <EmailForm />
      </div>
    </section>
  );
};

export default Contact;