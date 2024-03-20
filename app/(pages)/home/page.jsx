'use client'
import mainBanner from '@/public/image/banner1.jpg'
import datacloud from '@/public/image/datacloud1.png'
import jdiskill from '@/public/image/jdi-skill.png'
import datacloudlogo from '@/public/image/datacloudlogo.png'
import jdisubbanner from '@/public/image/jdi-sub-banner.png'
import AOS from 'aos'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

export default function Home() {
  useEffect(() => {
    AOS.init()
  }, [])

  const scrollTargetRef = useRef(null)
  const targetTopOffset = 70 // 상단으로부터 떨어진 거리 조절

  const scrollToTarget = () => {
    if (scrollTargetRef.current) {
      const elementRect = scrollTargetRef.current.getBoundingClientRect()
      const targetTop = elementRect.top + window.scrollY - targetTopOffset
      window.scrollTo({
        top: targetTop,
        behavior: 'smooth',
      })
    }
  }
  return (
    <main className="bg-white w-full flex flex-col items-center overflow-hidden">
      <div className="relative w-full max-h-[850px] flex items-center justify-center ">
        <Image
          src={mainBanner}
          alt="main-banner"
          className="min-w-[1100px] h-[500px] sm:h-full opacity-50"
          placeholder="blur"
          style={{
            objectFit: 'cover',
          }}
        />
        <div className=" bg-slate-300 z-10 absolute inset-0 opacity-10" />
        <ScrollActionBox className="text-[32px] sm:text-[64px] text-white font-bold flex flex-col absolute top-40 text-center gap-5">
          <div className="text-[#2c2c2c] hidden sm:block">
            <span>비즈니스 생태계 구축을 위한</span>
            <div>
              <span className="text-[#3886df]">“데이터 Biz.”</span>전문 기업
            </div>
          </div>
          <div className="text-[#2c2c2c] sm:hidden">
            <div>비즈니스 생태계 구축을 </div>
            <div>
              위한<span className="text-[#3886df]">“데이터 Biz.”</span>
            </div>
            <div>전문 기업</div>
          </div>
        </ScrollActionBox>

        <button
          onClick={scrollToTarget}
          className="hidden sm:block absolute bottom-5 z-20 animate-bounce"
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
        className="sm:min-h-screen flex-col items-center h-[500px] text-[20px] sm:text-[32px] font-bold w-[350px] sm:w-full text-center flex justify-center"
      >
        <div className="flex whitespace-pre-line break-words sm:max-w-[1170px]">
          {`혁신적인 AI, 빅데이터분석 기술과 독창적인 사업 전략 전문가들이함께 
          비즈니스 생태계 구축을 위한 “데이터 Biz.” 전문 기업입니다`}
        </div>
      </div>

      <div className="sm:min-h-screen flex-col items-center h-[500px] text-[20px] sm:text-[32px] font-bold w-full text-center flex justify-center bg-slate-100">
        <div className="sm:max-w-[1170px]">
          <div className="p-[30px] font-normal whitespace-pre-line text-left ">
            <div>
              <span className="text-[22px] sm:text-[32px] font-extrabold text-blue-500">
                제이디아이
              </span>
              <span className="text-[22px] sm:text-[32px]">는</span>
            </div>
            <div className="text-[16px] sm:text-[20px]">
              {`기술, 기획, 사업 전문가들과 함께 
          빅데이터 + AI기술을 기반 Business Insight를 제공합니다`}
            </div>
          </div>
          <ScrollActionBox className="" delay="200">
            <div className="px-[20px] sm:w-full mt-[30px]">
              <Image
                src={jdiskill}
                alt="jdiskill"
                className="w-full h-full rounded-full shadow-lg border-2 border-[#4c4c4c] shadow-blue-200"
                placeholder="blur"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </ScrollActionBox>
        </div>
      </div>

      <div className="max-w-[1170px] w-full pb-[300px] flex flex-col gap-[50px] pt-[100px]">
        <section className="grid sm:grid-cols-2 sm:gap-[100px] gap-5 sm:h-[600px] items-center justify-center">
          <ScrollActionBox className="" delay="200">
            <div className="relative w-full max-w-[360px] sm:max-w-full">
              <Image
                src={datacloud}
                alt="datacloud"
                className="w-full h-full rounded-xl shadow-blue-200 shadow-lg"
                placeholder="blur"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </ScrollActionBox>
          <ScrollActionBox className="">
            <h1 className="text-[22px] font-bold mt-[30px] sm:text-[32px]">
              <Image
                src={datacloudlogo}
                alt="datacloudlogo"
                className="w-[30px] sm:w-[45px] h-full inline-block mr-[7px]"
                placeholder="blur"
              />
              {`데이터를 가치있게`}
            </h1>
            <div className="h-[300px] w-[350px] sm:w-full whitespace-pre-line break-words mt-[20px] text-[12px] sm:text-[16px]">
              {`데이터는 새로운 시대의 화폐입니다. 
              우리는 다양한 소스에서 수집된 고도로 세분화된 데이터를 통해, 
              기업이 목표 시장을 더 잘 이해하고, 
              고객과의 연결을 강화할 수 있도록 지원합니다. `}
            </div>
          </ScrollActionBox>
        </section>

        <section className="grid sm:grid-cols-2 sm:gap-[100px] gap-5 sm:h-[600px] items-center justify-center">
          <ScrollActionBox className="order-last sm:order-first">
            <div className="h-[300px] w-[350px] sm:w-full whitespace-pre-line break-words text-[22px] sm:text-[32px] mt-[30px] font-bold text-[#333333]">
              {`혁신적인 AI, 빅데이터 분석 기술과 
              독창적인 사업 전략 전문가들이 
              함께합니다.`}
            </div>
          </ScrollActionBox>
          <ScrollActionBox className="" delay="200">
            <div className="relative h-[350px]">
              <div className="h-[350px] sm:h-[500px] justify-center flex flex-col items-center bg-white w-[300px] sm:w-[400px] shadow-blue-200 shadow-lg absolute -top-[20px] left-[20px] rounded">
                <div className="text-blue-600 text-[32px] sm:text-[46px] font-bold">
                  Solution
                </div>
                <div className="text-gray-300 text-[10px] sm:text-[14px]">
                  맞춤제작형 제이디아이와 함께 해야하는 이유
                </div>
                <div className="mt-[30px] flex flex-col gap-5 text-[12px] sm:text-[16px]">
                  <div>✔️ 솔루션 구축을 위한 전문가 배치 완료</div>
                  <div>✔️ 체계화된 구축 서비스 제공</div>
                  <div>✔️ 맞춤형 기획 건설팅 가능</div>
                  <div>✔️ 솔루션 대리 운영 가능</div>
                  <div>✔️ 경력자들로 구성된 믿을 수 있는 경력 보유</div>
                </div>
              </div>
              <div className="h-[310px] w-[340px] sm:h-[460px] border border-slate-100 sm:w-[440px] shadow-lg shadow-blue-200 rounded"></div>
            </div>
          </ScrollActionBox>
        </section>

        {/* <section className="grid sm:grid-cols-2 sm:gap-[100px] gap-5 sm:h-[600px] items-center justify-center">
          <ScrollActionBox className="" delay="200">
            <div className="h-[300px] bg-slate-200 w-full"></div>
          </ScrollActionBox>
          <ScrollActionBox className="">
            <h1 className="text-[32px] font-bold">{`titletitletitletitle`}</h1>
            <div className="h-[300px] w-[350px] sm:w-full whitespace-pre-line break-words">
              {`contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent`}
            </div>
          </ScrollActionBox>
        </section> */}
      </div>
    </main>
  )
}

const ScrollActionBox = ({
  children,
  duration = '1500',
  delay = '0',
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
  )
}
