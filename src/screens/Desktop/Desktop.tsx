import React from "react";
import { ContentWrapperSection } from "./sections/ContentWrapperSection";
import { HeroSection } from "./sections/HeroSection";
import { HistorySection } from "./sections/HistorySection";
import { IllustrationSection } from "./sections/IllustrationSection";
import { ImageWrapperSection } from "./sections/ImageWrapperSection";
import { ImportanceSection } from "./sections/ImportanceSection";
import { NavigationBarSection } from "./sections/NavigationBarSection";
import { ProjectOverviewSection } from "./sections/ProjectOverviewSection";

export const Desktop = (): JSX.Element => {
  return (
    <div className="bg-white w-full flex flex-col">
      <NavigationBarSection />
      <div className="pt-[122px]">
      <HeroSection />
      <HistorySection />
      <ImportanceSection />
      <ProjectOverviewSection />
      <IllustrationSection />
      <ImageWrapperSection />
      <ContentWrapperSection />
      </div>

      <footer className="w-full h-[122px] bg-[#397bff] relative">
      {/*  <img
          className="absolute w-[11.24%] h-[60.66%] top-[14.75%] left-[10.62%]"
          alt="Group"
          src="/group-5.png"
        >*/}

        <div className="absolute top-4 pb-8 left-[160px] w-[351px] h-[42px] bg-[#397bff]">
         

            <div className="flex justify-items-stretch right-[35px]">
               <div>
                <img
                   className="w-[100px] h-[95px] z-10"
                   alt="Partner logo 1"
                  src="/group-9.png"
                />
               </div>
              
                <div className= "flex-col pt-2">
                  <p className="[font-family:'Libre_Franklin',Helvetica] pl-10 font-normal text-[#c5b3ff] text-[20px] tracking-[0] pt-0 leading-[normal]">
              Quer saber mais?
        
            </p>
            <p className="[font-family:'Libre_Franklin',Helvetica] pl-10 font-normal text-[#cbec85] text-[16px] tracking-[0] pt-0 leading-[normal]">
              Entre em contato conosco:
            </p>
            <a
  href="mailto:suportecis@sfiec.org.br"
  className="[font-family:'Libre_Franklin',Helvetica] pl-10 font-normal text-[#fafbf7] text-[16px] tracking-[0] pt-0 leading-[normal] underline cursor-pointer"
>
  inovacaosesi@sfiec.org.br
</a>
                </div>
                
             </div>
            

          
        </div>
      </footer>
    </div>
  );
};
