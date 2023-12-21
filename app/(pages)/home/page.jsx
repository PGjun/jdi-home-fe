"use client";
import mainBanner from "@/public/image/main-banner.jpg";
import AOS from "aos";
import Image from "next/image";
import { useEffect, useRef } from "react";
export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  const scrollTargetRef = useRef(null);
  const targetTopOffset = 70; // 상단으로부터 떨어진 거리 조절

  const scrollToTarget = () => {
    if (scrollTargetRef.current) {
      const elementRect = scrollTargetRef.current.getBoundingClientRect();
      const targetTop = elementRect.top + window.scrollY - targetTopOffset;
      window.scrollTo({
        top: targetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <main className="bg-white w-full flex flex-col items-center overflow-hidden">
      <div className=" relative w-full max-h-[841px] flex items-center justify-center ">
        <Image
          src={mainBanner}
          alt="main-banner"
          className="opacity-20 min-w-[1100px] max-h-full m-[250px]"
          fixed
        />
        <div className=" bg-slate-300 z-10 absolute inset-0 opacity-10" />
        <ScrollActionBox className="text-[64px] font-bold flex flex-col absolute top-40 text-center gap-5">
          <div>
            <div>비즈니스 생태계 구축을 위한</div>
            <div>
              <span className="text-blue-500">“데이터 Biz.</span>
              <span className="text-blue-500">”</span>전문 기업
            </div>
          </div>
        </ScrollActionBox>

        <button
          onClick={scrollToTarget}
          className="absolute bottom-5 z-20 animate-bounce"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            dataSlot="icon"
            className="w-10 h-10 text-gray-300"
          >
            <path
              fillRule="evenodd"
              d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div
        ref={scrollTargetRef}
        className="min-h-screen py-[300px] whitespace-pre-line text-center text-[32px] font-bold"
      >
        {`혁신적인 AI, 빅데이터분석 기술과 독창적인 사업 전략 전문가들이함께
        비즈니스 생태계 구축을 위한 “데이터 Biz.” 전문 기업입니다`}
      </div>

      <div className="min-h-screen py-[300px] whitespace-pre-line text-center text-[32px] font-bold bg-slate-100 w-full">
        {`혁신적인 AI, 빅데이터분석 기술과 독창적인 사업 전략 전문가들이함께
        비즈니스 생태계 구축을 위한 “데이터 Biz.” 전문 기업입니다`}
      </div>

      <div className="w-[1170px] py-[300px] flex flex-col gap-[150px]">
        <div className="grid grid-cols-2 gap-[100px]">
          <ScrollActionBox className="" delay="200">
            <div className="h-[300px] bg-slate-200 w-full"></div>
          </ScrollActionBox>
          <ScrollActionBox className="">
            <div className="h-[300px] bg-slate-200 w-full"></div>
          </ScrollActionBox>
        </div>

        <div className="grid grid-cols-2 gap-[100px]">
          <ScrollActionBox className="">
            <div className="h-[300px] bg-slate-200 w-full"></div>
          </ScrollActionBox>
          <ScrollActionBox className="" delay="200">
            <div className="h-[300px] bg-slate-200 w-full"></div>
          </ScrollActionBox>
        </div>
      </div>
    </main>
  );
}

const ScrollActionBox = ({
  children,
  duration = "1500",
  delay = "0",
  ...rest
}) => {
  return (
    <div
      {...rest}
      data-aos="fade-up"
      data-aos-duration={duration}
      data-aos-delay={delay}
    >
      {children}
    </div>
  );
};