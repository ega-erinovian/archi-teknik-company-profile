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
