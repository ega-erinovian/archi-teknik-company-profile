import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

const ContactLink = () => {
  return (
    <div className="container mx-auto px-5 md:px-20 xl:px-0 mb-40 xl:mb-56">
      <div className="md:grid md:grid-cols-3 text-center md:text-start pb-12 lg:pb-20">
        <h1 className="font-bold text-4xl mb-5 col-span-2 xl:text-7xl">
          Make sure you choose the right consultant for your success
        </h1>
        <div className="w-full text-center md:flex items-center justify-end">
          <Link href={"/"}>
            <Button className="w-full py-12 md:py-8 md:px-8 bg-blue-600 hover:bg-blue-700">
              Contact Us <FaExternalLinkAlt className="opacity-30" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactLink;
