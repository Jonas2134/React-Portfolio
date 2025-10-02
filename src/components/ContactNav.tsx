import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";
import { Mail } from "lucide-react";

const ContactNav = () => {
  return (
    <section className="flex flex-col gap-10 py-10 px-10">
      <h3 className="text-rose-500 pb-3 underline">Let's work together</h3>
      <p>
        I am always happy to make new contacts and take on exciting projects.
        Just send me a message using the form or connect with me on Linkedin
        or Email.
      </p>

      <section className="grid grid-cols-4 grid-rows-2 gap-2 mt-20">
        <a
          className="flex justify-center items-center col-span-2 gap-2 border rounded backdrop-blur-md py-2 hover:scale-101 hover:shadow-lg"
          href="#"
        >
          Linkedin <Linkedin />
        </a>

        <a
          className="flex justify-center items-center col-span-2 gap-2 border rounded backdrop-blur-md py-2 hover:scale-101 hover:shadow-lg"
          href="#"
        >
          Github <Github />
        </a>

        <a
          className="flex justify-center items-center col-span-2 col-start-2 gap-2 border rounded backdrop-blur-md py-2 hover:scale-101 hover:shadow-lg"
          href="#"
        >
          Email <Mail />
        </a>
      </section>
    </section>
  );
};

export default ContactNav;
