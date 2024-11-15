import ContactForm from "./ContactForm";
import Locations from "./Locations";

const ContactSection = () => {
  return (
    <div className="container mx-auto px-5 md:px-20 xl:px-0 mb-48 xl:mb-80 mt-36">
      <h1 className="font-bold text-7xl my-24 lg:my-56 xl:text-8xl">
        Let's Get In Touch!
      </h1>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-20">
        <Locations />
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactSection;
