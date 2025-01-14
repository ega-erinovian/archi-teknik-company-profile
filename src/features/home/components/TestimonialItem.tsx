"use client";

import React, { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface TestimonialItemProps {
  testimonial: {
    entryId: string;
    review: string;
    name: string;
    company: string;
    companyLogo: string;
    backgroundImage: string;
  };
}

const TestimonialItem: FC<TestimonialItemProps> = ({ testimonial }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="w-[300px] sm:w-[400px] md:w-[500px] mx-4">
      <Card className="h-full overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="relative h-40 sm:h-48">
          <Image
            src={testimonial.backgroundImage}
            alt={`${testimonial.name}'s background`}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 hover:scale-105"
          />
        </div>
        <CardContent className="p-6 bg-gradient-to-br from-gray-50 to-white">
          <Quote className="text-blue-600 w-8 h-8 mb-4" />
          <p className="text-sm sm:text-base text-gray-800 italic leading-relaxed mb-4 line-clamp-4">
            {testimonial.review}
          </p>
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-bold text-sm sm:text-base text-gray-900 capitalize">
                {testimonial.name}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                {testimonial.company}
              </p>
            </div>
            <div className="relative w-16 h-8 sm:w-20 sm:h-10">
              <Image
                src={testimonial.companyLogo}
                alt={`${testimonial.company} logo`}
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TestimonialItem;
