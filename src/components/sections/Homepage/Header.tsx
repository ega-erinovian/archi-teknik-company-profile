import HeroVideoDialog from "@/components/ui/hero-video-dialog";

const Header = () => {
  return (
    <div className="pb-28">
      <div className="lg:grid lg:grid-cols-3 text-center lg:text-start pb-12 lg:pb-20">
        <h1 className="font-bold text-5xl mb-5 col-span-2 xl:text-7xl">
          We provide logistics solution tailor-made for individual customer.
        </h1>
        <div className="flex items-end">
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            quasi perferendis molestias vitae eveniet labore velit amet quia
            quaerat vel nulla sit numquam nisi suscipit est nesciunt ullam
            cumque quo esse corrupti ut dolorum, aliquid, magni voluptatibus.
            Nisi, saepe cupiditate!
          </p>
        </div>
      </div>
      <div className="relative mb-24">
        <HeroVideoDialog
          className="dark:hidden block h-[100px] rounded-3xl"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/O9F4rXp1Ogc?si=WkllVozAevIwWLBf"
          thumbnailSrc="/Homepage/Header/vidThumbnail.jpg"
          thumbnailAlt="Hero Video"
        />
      </div>
    </div>
  );
};

export default Header;
