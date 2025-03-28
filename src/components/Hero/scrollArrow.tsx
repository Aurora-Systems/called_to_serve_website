"use client"
const ScrollArrow = () => {
  const scrollToSection = () => {
    const section = document.getElementById("features");
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToSection}
      className="border-none bg-transparent text-white cursor-pointer font-normal"
    >
      &#x25BC; Find Out More
    </button>
  );
};

export default ScrollArrow;
