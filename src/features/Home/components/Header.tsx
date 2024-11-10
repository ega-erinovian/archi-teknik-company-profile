import HeroVideoDialog from "@/components/ui/hero-video-dialog";
import BoxReveal from "@/components/ui/box-reveal";

const Header = () => {
  return (
    <div className="container mx-auto px-5 md:px-20 xl:px-0 mb-48 xl:mb-96 mt-36">
      <div className="xl:grid xl:grid-cols-3 text-center xl:text-start pb-12 lg:pb-20">
        <h1 className="font-bold text-4xl mb-5 col-span-2 xl:text-7xl">
          Empowering Progress with Sustainable Engineering Solutions for a
          Better Future
        </h1>
        <div className="flex items-end">
          <BoxReveal boxColor={"#2663eb"} duration={0.75}>
            <p className="text-gray-700">
              As a trusted engineering consultancy, we specialize in creating
              efficient, forward-thinking designs that drive progress. Our
              mission is to enhance communities through sustainable
              infrastructure, prioritizing safety, quality, and environmental
              responsibility in every project.
            </p>
          </BoxReveal>
        </div>
      </div>
      <div className="relative mb-24">
        <HeroVideoDialog
          className="dark:hidden block"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/O9F4rXp1Ogc?si=WkllVozAevIwWLBf"
          thumbnailSrc="/homepage/header/vid-thumbnail.jpg"
          thumbnailAlt="Hero Video"
        />
      </div>
    </div>
  );
};

export default Header;
