import Image from "next/image";

const AboutSection = ({
  pageName,
  description,
  phone,
  emails,
  address
}: {
  pageName: string;
  description: string;
  phone?: string;
  emails?: string [];
  address?: string;
}) => {
  return (
    <>
      <section className="relative z-10 overflow-hidden pt-28 lg:pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 md:w-8/12 lg:w-7/12">
              <div className="mb-8 max-w-[570px] md:mb-0 lg:mb-12">
                <h1 className="mb-5 text-2xl font-bold text-black dark:text-white sm:text-3xl">
                  {pageName}
                </h1>
                {phone ?
                (
                  <>
                    <p>Call us: <span className="text-primary">{phone}</span></p>
                    <p>Email us: {emails.map((email, i) => (<span className="text-primary" key={i}>{email}{' '}</span>))}</p>
                    <p>Visit us at:{' '}{address}</p>
                  </>
                ) : <p className="text-base font-medium leading-relaxed text-body-color">
                  {description}
                </p>}
              </div>
            </div>
            <div className="w-full px-4 md:w-4/12 lg:w-5/12">
              <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Image
                  src="https://ngratesc.sirv.com/mae_website/engine.png"
                  alt="4x4 vehicle"
                  className=""
                  width={900}
                  height={30}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
