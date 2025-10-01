import ContactNav from "./ContactNav";
import EmailForm from "./EmailForm";

const Contact = () => {
  return (
    <section className="flex flex-col items-center gap-6">
      <h2 className="text-orange-500 ">Get in Touch</h2>
      <div className="grid grid-cols-2 gap-2 w-full">
        <ContactNav />
        <EmailForm />
      </div>
    </section>
  );
};

export default Contact;