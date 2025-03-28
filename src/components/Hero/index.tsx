import Image from "next/image";
import Link from "next/link";
import ScrollArrow from "./scrollArrow";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden  pb-16 pt-[120px]  md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  CALLED TO SERVE <span className="text-primary">AUTOPARTS</span>
                </h1>
      
                {/* <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Image
                    src="https://ngratesc.sirv.com/called_to_serve/3d-truck.png"
                    alt="truck vehicle"
                    className=""
                    width={300}
                    height={30}
                  />
                </div> */}

                <div className="bg-[rgb(255,255,255)]/50 py-5 flex flex-col items-center rounded-lg justify-around space-y-4 md:flex-row md:space-x-4 md:space-y-0">
                  <Image
                    src="https://ngratesc.sirv.com/called_to_serve/iveco-logo.png"
                    alt="logo"
                    className=""
                    width={100}
                    height={30}
                  />
                  <Image
                    src="https://ngratesc.sirv.com/called_to_serve/daf-logo.png"
                    alt="logo"
                    className=""
                    width={60}
                    height={30}
                  />
                  <Image
                    src="https://ngratesc.sirv.com/called_to_serve/man-truck-bus-logo.png"
                    alt="logo"
                    className=""
                    width={60}
                    height={30}
                  />
                  <Image
                    src="https://ngratesc.sirv.com/called_to_serve/scania-logo.png"
                    alt="logo"
                    className=""
                    width={60}
                    height={30}
                  />
                  <Image
                    src="https://ngratesc.sirv.com/called_to_serve/volvo-logo.png"
                    alt="logo"
                    className=""
                    width={60}
                    height={30}
                  />
                  <Image
                    src="https://ngratesc.sirv.com/called_to_serve/benz.png"
                    alt="logo"
                    className=""
                    width={60}
                    height={30}
                  />
                  <Image
                    src="https://ngratesc.sirv.com/called_to_serve/ud-trucks-logo-dark.png"
                    alt="logo"
                    className=""
                    width={120}
                    height={30}
                  />
                </div>

                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 mt-40">
                  <ScrollArrow />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <div className="absolute inset-0 bg-[url(https://ngratesc.sirv.com/Mashkay/Untitled%20design.png)] bg-cover bg-center bg-no-repeat opacity-70"></div>
    </>
  );
};

export default Hero;
