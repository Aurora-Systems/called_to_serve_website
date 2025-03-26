import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";
import GoogleMapsBox from "../../components/Contact/GoogleMapBox";

export const metadata: Metadata = {
  title: "Contacts",
  description: "Reach out to us!",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contacts"
        description={`
          Business number: +263 78 695 5677
          Email: infor@calledtoserve.co.zw, sales@calledtoserve.co.zw
          Business Address: Conner 1st street and Jason Moyo Ave, Harare, Zimbabwe
          `
        }
        phone="+263 786 955 677"
        emails={['infor@calledtoserve.co.zw', 'sales@calledtoserve.co.zw']}
        address="Corner 1st street and Jason Moyo Ave, Harare, Zimbabwe"
      />
      <GoogleMapsBox />
      <Contact />
    </>
  );
};

export default ContactPage;
