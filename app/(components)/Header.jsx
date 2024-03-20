'use client'

import Link from 'next/link'
import logo from '@/public/image/JDI_LOGO 1.svg'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
const navmenu = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Contact',
    path: '/contact',
  },
  // {
  //   name: "Example",
  //   path: "/example",
  // },
]

export const Header = () => {
  const [navState, setNavState] = useState(false)

  const [scrolled, setScrolled] = useState(false)
  const currentPathname = usePathname()

  const handleResize = () => {
    // 창 크기가 변경될 때 호출되는 함수
    const isMobile = window.innerWidth <= 640 // 적절한 폭 설정

    if (!isMobile && navState) {
      // 창이 충분히 커져서 모바일 상태에서 열려 있으면 닫기
      setNavState(false)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)

    // 창 크기 변경 이벤트에 대한 이벤트 리스너 추가
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [navState])

  return (
    <header
      className={`bg-white flex justify-center fixed w-full h-[70px] z-50 ${
        scrolled ? 'border-b border-gray-200' : 'border-b border-gray-200'
      }`}
    >
      <main className="relative w-full sm:w-[1170px] flex justify-between items-center px-10 h-full">
        <Link href={'/'}>
          <Image src={logo} alt="logo" width={40} height={40} />
        </Link>
        <nav className="hidden sm:flex gap-10 pr-10">
          {navmenu.map((menu) => {
            return (
              // <Link href={menu.path} key={menu.name}>
              <button
                className={`hover:text-blue-500 cursor-pointer ${
                  menu.path == currentPathname
                    ? 'text-blue-500'
                    : 'text-slate-700'
                }  `}
              >
                {menu.name}
              </button>
              // </Link>
            )
          })}
        </nav>
        <button
          onClick={() => setNavState((pre) => !pre)}
          className="sm:hidden flex"
        >
          {navState ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
        {navState && (
          <nav className="flex flex-col h-screen gap-5 px-10 py-5 absolute right-0 top-[70px] bg-white shadow-md ">
            {navmenu.map((menu) => {
              return (
                <Link href={menu.path} key={menu.name}>
                  <button
                    className={`hover:text-blue-500 ${
                      menu.path == currentPathname
                        ? 'text-blue-500'
                        : 'text-slate-700'
                    }  `}
                  >
                    {menu.name}
                  </button>
                </Link>
              )
            })}
          </nav>
        )}
      </main>
    </header>
  )
}
