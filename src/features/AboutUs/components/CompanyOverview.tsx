const CompanyOverview = () => {
  return (
    <div className="container mx-auto px-5 md:px-20 xl:px-0 mb-48 xl:mb-80">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:gap-4">
        <div className="h-full">
          <h1 className="font-bold text-2xl mb-5 xl:text-5xl lg:sticky lg:top-20">
            Building a Future of Innovation and Excellence
          </h1>
        </div>
        <div className="grid gap-4 lg:gap-6 xl:text-2xl">
          <p className="font-semibold text-lg md:text-xl xl:text-3xl">
            We are a leading global engineering consultancy dedicated to
            providing innovative, high-quality solutions that shape
            infrastructure and strengthen communities. With a team of 350+
            skilled professionals, we specialize in tailored services across
            various industries, from structural engineering to sustainability
            consulting.
          </p>
          <p>
            Founded in 1996, we’ve grown from a small consultancy into an
            international firm with 12 headquarters worldwide and a portfolio of
            500+ successful projects. Our journey reflects a commitment to
            excellence, integrity, and continuous growth.
          </p>
          <p>
            Our mission is to create resilient, sustainable engineering
            solutions that meet client needs today while contributing to a
            better future. With a focus on quality, innovation, and
            sustainability, we proudly set new standards in engineering.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyOverview;
