import Image from "next/image";
import Marquee from "@/components/ui/marquee";
import TestimonialItem from "./TestimonialItem";
import { getTestimoinals } from "@/lib/contentful";

const Testimonials = async () => {
  const testimonials = [
    {
      imageURL: "/homepage/testimonial/space-x.png",
      logo: "/homepage/testimonial-logo/space-x.png",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus os doloremque nemo quod, quo, ratione illo inventore accusantium.",
      name: "Elon Musk",
      position: "CEO of SpaceX",
    },
    {
      imageURL: "/homepage/testimonial/ikn.jpg",
      logo: "/homepage/testimonial-logo/ikn.png",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus os doloremque nemo quod, quo, ratione illo inventore accusantium.",
      name: "I Nyoman Nuarta",
      position: "Indonesian Sculptor, Artist",
    },
    {
      imageURL: "/homepage/testimonial/white-house.jpg",
      logo: "/homepage/testimonial-logo/usa-flag.png",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus os doloremque nemo quod, quo, ratione illo inventore accusantium.",
      name: "John F. Kennedy",
      position: "35th president of the United States",
    },
  ];

  const testimonialss = await getTestimoinals();
  return (
    <div className="mb-48 xl:mb-96">
      <Marquee pauseOnHover className="[--duration:40s]">
        {testimonialss?.map((testimonial) => (
          <TestimonialItem
            key={testimonial.entryId}
            testimonial={testimonial}
          />
        ))}
      </Marquee>
    </div>
  );
};

export default Testimonials;
