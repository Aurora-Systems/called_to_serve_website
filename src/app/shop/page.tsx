import Breadcrumb from "@/components/Common/Breadcrumb";
import ShoppingItems from "./shoppingItems";

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
      {/* <section className="pb-[150px] pt-[150px] bg-[url(https://ngratesc.sirv.com/called_to_serve/carpart.png)]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <ShoppingItems />
          </div>
        </div>
      </section> */}
    
      {/* <section className="flex items-center justify-center container mx-auto pb-10 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <ShoppingItems />
        </div>
      </section> */}
      
          <ShoppingItems />
 
    </>
  );
}

export default Shop;