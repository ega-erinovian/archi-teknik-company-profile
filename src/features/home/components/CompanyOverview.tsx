import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { overviewContent } from "../constants";

const CompanyOverview = () => {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl text-center font-bold mb-16 sm:mb-24">
          Why choose{" "}
          <span className="text-blue-600 relative">
            us
            <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600" />
          </span>
          ?
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {overviewContent.map((content, idx) => (
            <div key={idx}>
              <Card className="h-full transition-shadow duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 text-blue-600 transition-transform duration-300 transform hover:scale-110">
                    {content.icon}
                  </div>
                  <CardTitle className="text-xl sm:text-2xl text-center">
                    {content.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600 transition-colors duration-300">
                    {content.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
