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

        <div className="absolute top-4 pb-10 left-[200px] w-[351px] h-[42px] bg-[#397bff]">
         

            <div className="flex justify-items-stretch  right-[35px]">
               <div>
                <img
                   className="w-[100px] h-[100px] z-10"
                   alt="Partner logo 1"
                  src="/group-9.png"
                />
               </div>
                <div>
                  <p className="[font-family:'Libre_Franklin',Helvetica] p-10 font-normal text-[#c5b3ff] text-[20px] tracking-[0] pt-0 leading-[normal]">
              Quer saber mais?
        
            </p>
            <p>
              Entre em contato conosco
            </p>
                </div>
                
             </div>
            

          
        </div>
      </footer>
    </div>
  );
};
