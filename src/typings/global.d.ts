declare module '*.yaml' {
  const yaml: {
    heroSection: {
      imageUrl: string;
    };
    projectSection: {
      images: Array<string>;
      blurDataUrls: Array<string>;
      heading: string;
      briefHeading: string;
      content: Array<{
        imageUrl: string;
        title: string;
        linkUrl: string;
        description: string;
        alt: string;
      }>;
    };
    missionSection: {
      heading: string;
      images: Array<string>;
      blurDataUrls: Array<string>;
      content1: {
        description: string;
        imageUrl: string;
        alt: string;
      };
      content2: {
        description: string;
        imageUrl: string;
        alt: string;
      };
      content3: {
        description: string;
        imageUrl: string;
        alt: string;
      };
    };
    testimonialSection: {
      content: Array<{
        description: string;
        linkUrl: string;
        company: string;
        author: string;
        role: string;
      }>;
    };
    skillSection: {
      imageUrl: string;
      blurDataUrl: string;
      subheading: string;
      description: string;
      briefSubheading: string;
      alt: string;
    };
    contactSection: {
      title: string;
      subtitle: string;
      image: string;
      blurDataUrl: string;
      maskTitle: string;
      maskSubtitle: string;
      modalSuccess: { title: string; description: string };
      modalError: { title: string; description: string };
    };
  };
  export default yaml;
}
