import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { navItems } from "./constants";

const Footer = () => {
  return (
    <>
      <div className="container mx-auto px-5 md:px-20 xl:px-0 py-8">
        <hr className="mb-20" />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="md:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="font-semibold text-gray-800 flex items-center text-2xl xl:text-4xl mb-4">
              <svg
                id="logo-35"
                width="50"
                height="39"
                viewBox="0 0 50 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                {" "}
                <path
                  d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
                  fill="#007AFF"></path>{" "}
                <path
                  d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
                  fill="#312ECB"></path>{" "}
              </svg>
              Archi
            </Link>
            <p>
              As a trusted engineering consultancy, we specialize in creating
              efficient, forward-thinking designs that drive progress. Our
              mission is to enhance communities through sustainable
              infrastructure, prioritizing safety, quality, and environmental
              responsibility in every project.
            </p>
          </div>
          <div className="lg:mx-auto">
            <h1 className="font-semibold text-xl mb-2">Company</h1>
            <ul className="flex flex-col gap-2">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-blue-600">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="">
            <div className="mb-8">
              <h1 className="font-semibold text-xl mb-2">Contact Us</h1>
              <p className="flex gap-2 items-center mb-2">
                architeknikconsultant@gmail.com
              </p>
              <p className="flex gap-2 items-center">+62 812-525-62254</p>
            </div>
            <div>
              <h1 className="font-semibold text-xl mb-2">Stay Tune</h1>
              <ul className="flex gap-4">
                <li className="p-2 bg-gradient-to-b from-violet-500 via-pink-500 to-orange-400 rounded-full">
                  <Link
                    href="https://www.instagram.com/egaerinovian/"
                    className="text-2xl"
                    target="_blank">
                    <FaInstagram fill="#ffffff" />
                  </Link>
                </li>
                <li className="p-2 bg-green-500 rounded-full">
                  <Link
                    href="https://wa.me/+6285155114016"
                    className="text-2xl"
                    target="_blank">
                    <FaWhatsapp fill="#ffffff" />
                  </Link>
                </li>
                <li className="p-2 bg-sky-600 rounded-full">
                  <Link
                    href="https://www.linkedin.com/in/ega-erinovian/"
                    className="text-2xl"
                    target="_blank">
                    <FaLinkedinIn fill="#ffffff" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-5 md:px-20 xl:px-0 mt-10">
        <p className="text-xs text-center py-4 ">
          &copy; All right reserved - Archi Teknik
        </p>
      </div>
    </>
  );
};

export default Footer;
