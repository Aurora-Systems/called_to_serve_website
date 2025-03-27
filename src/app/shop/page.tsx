import Breadcrumb from "@/components/Common/Breadcrumb";
import ShoppingItems from "../../components/Shop/ShoppingItems";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop",
  description: "View our catalogue!",
  // other metadata
};

const Shop = () => {
  return (
    <>
      <Breadcrumb
        pageName="Shop"
        description="Explore our catalogue."
      />
      
      <ShoppingItems />
    </>
  );
}

export default Shop;