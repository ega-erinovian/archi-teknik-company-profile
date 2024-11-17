import NumberTicker from "@/components/ui/number-ticker";

const CompanyValue = () => {
  return (
    <div className="container mx-auto px-5 md:px-20 xl:px-0 mb-48 xl:mb-80">
      <div className="grid md:grid-cols-2 xl:grid-cols-4 md:gap-20 gap-32 mt-20 text-black">
        <div className="text-center xl:text-start">
          <h1 className="font-semibold mb-7 text-5xl xl:text-6xl">
            <NumberTicker className="text-black" value={1000} />+
          </h1>
          <hr className="mb-7" />
          <h2 className="font-semibold text-3xl md:text-2xl mb-5">
            People Working at Archi
          </h2>
        </div>
        <div className="text-center xl:text-start">
          <NumberTicker
            className="font-semibold mb-7 text-5xl xl:text-6xl text-black"
            value={6}
          />
          <hr className="mb-7" />
          <h2 className="font-semibold text-3xl md:text-2xl mb-5">
            Office Worldwide
          </h2>
        </div>
        <div className="text-center xl:text-start">
          <h1 className="font-semibold mb-7 text-5xl xl:text-6xl">
            <NumberTicker className="text-black" value={37} /> years
          </h1>
          <hr className="mb-7" />
          <h2 className="font-semibold text-3xl md:text-2xl mb-5">
            Experience in Engineering
          </h2>
        </div>
        <div className="text-center xl:text-start">
          <h1 className="font-semibold mb-7 text-5xl xl:text-6xl">
            <NumberTicker className="text-black" value={500} />+
          </h1>
          <hr className="mb-7" />
          <h2 className="font-semibold text-3xl md:text-2xl mb-5">
            Successful Projects
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CompanyValue;
