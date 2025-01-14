import { createClient, FieldsType } from "contentful";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT_ID!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
});

interface ResponseEntry {
  sys: { id: string };
  fields: FieldsType;
}

// Testimonial Data
export const getTestimoinals = async () => {
  try {
    const response = await client.getEntries({
      content_type: "testimonials",
    });

    const testimonials = response.items.map((testimonial: ResponseEntry) => {
      return {
        entryId: testimonial.sys.id,
        review: testimonial.fields.review,
        name: testimonial.fields.name,
        company: testimonial.fields.company,
        companyLogo: "https:" + testimonial.fields.companyLogo.fields.file.url,
        backgroundImage:
          "https:" + testimonial.fields.backgroundImage.fields.file.url,
      };
    });

    return testimonials;
  } catch (error) {
    console.log(error);
  }
};

// Services Data
export const getServices = async () => {
  try {
    const response = await client.getEntries({
      content_type: "service",
    });

    const services = response.items.map((service: ResponseEntry) => {
      return {
        entryId: service.sys.id,
        title: service.fields.title,
        overview: service.fields.overview,
        icon: "https:" + service.fields.icon.fields.file.url,
      };
    });

    return services;
  } catch (error) {
    console.log(error);
  }
};

export const getService = async (entryId: string) => {
  try {
    const response: ResponseEntry = await client.getEntry(entryId);

    const services = {
      entryId: response.sys.id,
      title: response.fields.title,
      tagline: response.fields.tagline,
      overview: response.fields.overview,
      description: response.fields.description,
      icon: "https:" + response.fields.icon?.fields.file.url,
      thumbnail: "https:" + response.fields.thumbnail?.fields.file.url,
    };

    return services;
  } catch (error) {
    console.log(error);
  }
};
