"use client";

import React from "react";
import { getTestimoinals } from "@/lib/contentful";
import Marquee from "@/components/ui/marquee";
import TestimonialItem from "./TestimonialItem";

const Testimonials = () => {
  const [testimonials, setTestimonials] = React.useState<any[]>([]);

  React.useEffect(() => {
    const fetchTestimonials = async () => {
      const fetchedTestimonials = await getTestimoinals();
      setTestimonials(fetchedTestimonials || []);
    };
    fetchTestimonials();
  }, []);

  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl text-center font-bold mb-8">
          What Our <span className="text-blue-600">Clients</span> Say
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto">
          Don't just take our word for it. Here's what some of our valued
          clients have to say about their experience working with us.
        </p>
      </div>
      <Marquee pauseOnHover speed={40} gradient={false}>
        {testimonials.map((testimonial) => (
          <TestimonialItem
            key={testimonial.entryId}
            testimonial={testimonial}
          />
        ))}
      </Marquee>
    </section>
  );
};

export default Testimonials;
