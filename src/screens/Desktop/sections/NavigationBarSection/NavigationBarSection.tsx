import React from "react";

const navLinks = [
  { text: "Inicio", active: true },
  { text: "O Projeto", active: false },
  { text: "Eixos Temáticos", active: false },
];

const partnerLogos = [
  {
    src: "/logosesis",
    alt: "Partner logo 1",
    width: "w-[21.22%]",
    height: "h-[18.06%]",
  },

  
];

export const NavigationBarSection = (): JSX.Element => {
  const [selectedNav, setSelectedNav] = React.useState<string>("Inicio");

  const handleNavClick = (linkText: string) => {
    setSelectedNav(linkText);
    if (linkText === "O Projeto") {
      const section = document.getElementById("project-overview");
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
        
      }
    }
     if (linkText === "Eixos Temáticos") {
      const section = document.getElementById("eixosTematicos");
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
        
      }
    }
     if (linkText === "Inicio") {
      const section = document.getElementById("inicio");
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
        
      }
    }
  };
  return (
    <nav className="fixed top-0 left-0 z-50 w-full h-[122px] bg-[#397bff] flex items-center justify-between px-[153px]">
  <div className="flex-shrink-0">
    <img className="w-[162px] h-[74px]" alt="Logo" src="/group-10.png" />
  </div>

  <div className="flex items-center gap-[51px] left-[531px] top-[57px]">
    {navLinks.map((link, index) => (
      <div
        key={index}
        onClick={() => handleNavClick(link.text)}
        className={`flex items-center justify-center [font-family:'Poppins',Helvetica] text-base tracking-[0] leading-[normal] whitespace-nowrap cursor-pointer ${
          selectedNav === link.text
            ? link.text === "O Projeto"
              ? "font-bold text-[#d5f48c]"
              : "font-bold text-[#d5f48c]"
            : "font-normal text-[#ededed]"
        }`}
      >
        {link.text}
      </div>
    ))}
  </div>

  <div className="w-[351px] h-[122px] bg-[#397bff] gap-[10px] flex flex-col items-end justify-center relative">
   
    
    <div className="flex items-center top-[56px] right-[35px]">
      <img
        className="w-[200px] h-[60px]"
        alt="Partner logo 1"
        src="/iniciativasesi.png"
      />
      
      
    </div>
  </div>
</nav>

  );
};
