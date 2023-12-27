"use client";
import mainBanner from "@/public/image/banner1.jpg";
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
      <div className="relative w-full max-h-[850px] flex items-center justify-center ">
        <Image
          src={mainBanner}
          alt="main-banner"
          className="min-w-[1100px] h-[700px] sm:h-full opacity-50"
          placeholder="blur"
          style={{
            objectFit: "cover",
          }}
        />
        <div className=" bg-slate-300 z-10 absolute inset-0 opacity-10" />
        <ScrollActionBox className="text-[38px] sm:text-[64px] text-white font-bold flex flex-col absolute top-40 text-center gap-5">
          <div className="text-[#2c2c2c]">
            <div>비즈니스 생태계 구축을 위한</div>
            <div>
              <span className="text-[#3886df]">“데이터 Biz.”</span>전문 기업
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
            className="w-10 h-10"
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
        className="min-h-screen py-[300px] text-[32px] font-bold w-full text-center flex justify-center"
      >
        <div className="whitespace-pre-line break-words max-w-[1170px]">
          {`혁신적인 AI, 빅데이터분석 기술과 독창적인 사업 전략 전문가들이함께
        비즈니스 생태계 구축을 위한 “데이터 Biz.” 전문 기업입니다`}
        </div>
      </div>

      <div className="min-h-screen py-[300px] text-[32px] font-bold bg-slate-100 w-full text-center flex justify-center">
        <div className="whitespace-pre-line break-words max-w-[1170px]">
          {`contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent`}
        </div>
      </div>

      <div className="sm:w-[1170px] w-full pb-[300px] flex flex-col">
        <section className="grid grid-cols-2 gap-[100px] h-[700px] items-center">
          <ScrollActionBox className="" delay="200">
            <div className="h-[300px] bg-slate-200 w-full"></div>
          </ScrollActionBox>
          <ScrollActionBox className="">
            <h1 className="text-[32px] font-bold">{`titletitletitletitle`}</h1>
            <div className="h-[300px] w-full whitespace-pre-line break-words">
              {`contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent`}
            </div>
          </ScrollActionBox>
        </section>

        <section className="grid grid-cols-2 gap-[100px] h-[700px] items-center">
          <ScrollActionBox className="">
            <h1 className="text-[32px] font-bold">{`titletitletitletitle`}</h1>
            <div className="h-[300px] w-full whitespace-pre-line break-words">
              {`contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent`}
            </div>
          </ScrollActionBox>
          <ScrollActionBox className="" delay="200">
            <div className="h-[300px] bg-slate-200 w-full"></div>
          </ScrollActionBox>
        </section>

        <section className="grid grid-cols-2 gap-[100px] h-[700px] items-center">
          <ScrollActionBox className="" delay="200">
            <div className="h-[300px] bg-slate-200 w-full"></div>
          </ScrollActionBox>
          <ScrollActionBox className="">
            <h1 className="text-[32px] font-bold">{`titletitletitletitle`}</h1>
            <div className="h-[300px] w-full whitespace-pre-line break-words">
              {`contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent`}
            </div>
          </ScrollActionBox>
        </section>
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
