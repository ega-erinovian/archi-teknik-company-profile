import Image from "next/image";
import Header from "../components/sections/Homepage/Header";

export default function Home() {
  return (
    <>
      {/* Homepage */}
      <section className="container mx-auto pt-12 lg:pt-32 px-5 xl:px-0">
        <Header />
      </section>
    </>
  );
}
