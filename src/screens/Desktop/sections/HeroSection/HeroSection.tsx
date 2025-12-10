import React from "react";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-[#0346c8] py-16 px-8 overflow-hidden" id="inicio">
      <div className="relative max-w-[1440px] mx-auto min-h-[862px]">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-start">
          <div className="flex flex-col">
            <h1 className="[font-family:'Paytone_One',Helvetica] font-normal text-[#d5f48c] p-16 text-[49px] tracking-[1.50px] leading-[56px] max-w-[683px]">
              Um movimento chamado{" "}
              <span className="text-[#c391ea]">SABER</span> que transforma conhecimento em atitudes de cuidado,
              ensinando nossos alunos a cuidar de si, do outro e da comunidade.
            </h1>

            

            {/* <img
              className="w-full max-w-[837px] p-20 h-auto"
              alt="Group"
              src="/group-2.png"
            />

            <p className="[font-family:'Libre_Franklin',Helvetica] p-20 font-normal text-[#c5b3ff] text-[32px] tracking-[0] pt-0 leading-[normal] max-w-[900px]">
              Um movimento que transforma conhecimento em atitudes de cuidado,
              ensinando nossos alunos a cuidar de si, do outro e da comunidade.
            </p> */}
          </div>

          <div className="relative flex items-center justify-center lg:justify-end pt-12">
            <img
              className="absolute top-3 left-1 w-[130%] h-auto max-w-[1200px] opacity-50"
              alt="Vector"
              src="/vector.svg"
            />

            <img
              className="relative z-10 left-36 top-10 w-[130%] max-w-[784px] h-auto"
              alt="Frame"
              src="/frame-141.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
