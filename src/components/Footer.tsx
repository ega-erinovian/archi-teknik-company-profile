import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="container mx-auto px-5 md:px-20 xl:px-0 grid gap-8 md:grid-cols-2 lg:grid-cols-3 py-8">
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
            ArchiTeknik
          </Link>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
            hic dolores blanditiis assumenda veritatis amet, at repellat eius
            corporis voluptate!
          </p>
        </div>
        <div className="lg:mx-auto">
          <h1 className="font-semibold text-xl mb-2">Company</h1>
          <ul className="flex flex-col gap-2">
            <li>
              <Link href="/" className="hover:text-blue-600">
                About Us
              </Link>
            </li>
            <Link href="/" className="hover:text-blue-600">
              <li>Company History</li>
            </Link>
            <Link href="/" className="hover:text-blue-600">
              <li>Teams</li>
            </Link>
            <Link href="/" className="hover:text-blue-600">
              <li>News</li>
            </Link>
            <Link href="/" className="hover:text-blue-600">
              <li>Life at Archi</li>
            </Link>
          </ul>
        </div>
        <div className="">
          <div className="mb-8">
            <h1 className="font-semibold text-xl mb-2">Office</h1>
            <p>
              Jl. Kayen Raya No. 23 B, Kayen, Condong Catur, Depok, Sleman,
              Daerah Istimewa Yogyakarta
            </p>
          </div>
          <div>
            <h1 className="font-semibold text-xl mb-2">Contact Us</h1>
            <p className="flex gap-2 items-center mb-2">
              architeknikconsultant@gmail.com
            </p>
            <p className="flex gap-2 items-center">+62 812-525-62254</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-5 md:px-20 xl:px-0 ">
        <hr />
        <p className="text-xs text-center py-4 ">
          &copy; All right reserved - Archi Teknik
        </p>
      </div>
    </>
  );
};

export default Footer;
