import { FC } from "react";

interface HeaderProps {
  title: string;
  overview: any;
}

const Header: FC<HeaderProps> = ({ title, overview }) => {
  return (
    <>
      <div className="min-h-[80vh] w-full my-20"></div>
      <div className="min-h-[80vh] w-full bg-blue-600 absolute top-0">
        <div className="container mx-auto px-5 md:px-20 xl:px-0 mb-48 xl:mb-0 h-[80vh] flex items-end">
          <div className="xl:grid xl:grid-cols-3 text-center xl:text-start pb-12 lg:pb-20 text-white">
            <h1 className="font-bold text-5xl md:text-6xl mb-5 col-span-2 xl:text-8xl">
              {title}
            </h1>
            <div className="flex items-end">{overview}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
