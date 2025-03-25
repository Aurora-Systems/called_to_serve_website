import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";
import AboutSection from "./aboutSection";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <AboutSection
        pageName="About"
        description={`We're your trusted Source for Premium Auto Parts! Are you looking for top-quality auto parts and exceptional service? Look no further! We specialize in providing reliable, affordable, and durable auto parts tailored to keep your vehicle running at its best. With a wide range of products for all makes and models, expert advice, and speedy delivery, we ensure you get back on the road without hassle. Whether you're a seasoned mechanic or a first-time car owner, we're here to make your auto parts shopping experience seamless. Drive with Confidence—Shop Now!`}
      />
      <AboutSectionOne />
      {/* <AboutSectionTwo /> */}
    </>
  );
};

export default AboutPage;
