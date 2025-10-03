import { Linkedin, Github, Mail } from "lucide-react";
import type { FC } from "react";

interface ContactNavProps {
  linkedinUrl: string;
  githubUrl: string;
  email: string;
}

const ContactNav: FC<ContactNavProps> = ({ linkedinUrl, githubUrl, email }) => {
  return (
    <aside
      className="flex flex-col gap-8 py-10 px-6"
      aria-labelledby="contact-heading"
    >
      <h3 className="text-rose-500 pb-3 underline">Let's work together</h3>
      <p>
        I am always happy to make new contacts and take on exciting projects.
        Just send me a message using the form or connect with me on Linkedin or
        Email.
      </p>

      <nav aria-label="Social links">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          <li>
            <a
              className="flex justify-center items-center gap-1 border rounded backdrop-blur-md py-2 transition hover:scale-101 hover:shadow-lg"
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5" />
              <span className="font-medium">Linkedin</span>
            </a>
          </li>

          <li>
            <a
              className="flex justify-center items-center gap-1 border rounded backdrop-blur-md py-2 transition hover:scale-101 hover:shadow-lg"
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5" />
              <span className="font-medium">Github</span>
            </a>
          </li>

          <li>
            <a
              className="flex justify-center items-center gap-1 border rounded backdrop-blur-md py-2 transition hover:scale-101 hover:shadow-lg"
              href={`mailto:${email}`}
            >
              <Mail className="w-5 h-5" />
              <span className="font-medium">Email</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default ContactNav;
