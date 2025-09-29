import ContactNav from "./ContactNav"
import EmailForm from "./EmailForm"

const Contact = () => {
  return (
    <section>
        <h2 className="text-orange-500">Get in Touch</h2>
        <div>
          <ContactNav />
          <EmailForm />
        </div>
    </section>
  )
}

export default Contact