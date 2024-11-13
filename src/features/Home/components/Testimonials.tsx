import Image from "next/image";
import Marquee from "@/components/ui/marquee";
import TestimonialItem from "./TestimonialItem";
import { getTestimoinals } from "@/lib/contentful";

const Testimonials = async () => {
  const testimonials = await getTestimoinals();
  return (
    <div className="mb-48 xl:mb-96">
      <Marquee pauseOnHover className="[--duration:40s]">
        {testimonials?.map((testimonial) => (
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
