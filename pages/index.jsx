import { useEffect } from "react";
import { useTheme } from "next-themes";
import Head from "next/head";
import Image from "next/image";

import Contact from "@/components/Contact";
import Experience from "@/components/Experience";

import { BsArrowUpRight } from "react-icons/bs";

import Avatar_Black from "@/public/Avatar-black.svg";
import Avatar_White from "@/public/Avatar-white.svg";
import Link from "next/link";

export default function Home() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  
  
  useEffect(() => {
    console.clear();
    console.log.apply(console, [
      "%c Designed and Developed by Maverick Cagne %c %c🚀 %c\n",
      "color: #fff; background: #8000ff; padding:5px 0;",
      "color: #fff; background: #242424; padding:5px 0 5px 5px;",
      "background: #242424; padding:5px 0",
      "background: #242424; padding:5px 5px 5px 0",
    ]);
  }, []);


  
  return (
    <>
      <Head>
        <title>Maverick Cagne</title>
        <link rel="icon" href="/icon.svg" />
      </Head>
      <div className="lg:min-h-screen px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]">
        <div className="lg:h-screen 2xl:h-max max-w-[90rem] mx-auto">
          <div className="flex flex-row justify-start items-center mt-20">
            
            <div className="flex flex-col ml-4">
              <h2 className="flex sm:text-2xl md:text-2xl lg:text-2xl"> 
                <span className="font-semibold">Maverick Cagne</span>
              </h2>
              <h3>
                <Link
                  href={"https://www.linkedin.com/in/maverick-cagne/"}
                  target="_blank"
                  className="text-[#717171bb] flex items-center"
                >
                  <p>@mav</p>
                  <BsArrowUpRight className="stroke-1 h-3" />
                </Link>
              </h3>
            </div>
          </div>
          <div className="mt-12 text-base md:text-xl lg:text-xl xl:text-xl 2xl:text-xl">
            <p className="sm:leading-6 md:leading-6 lg:leading-8">
            I am a passionate student who loves coding and developing modern UI/UX systems and mobile applications. I create intuitive, reactive, and user-friendly interfaces using the latest technologies. I believe in a perfect blend of user interface architecture where the goals and needs are accounted for in an elegant, efficient, and robust design.
            </p>
          </div>
        </div>
        <div className="mt-28 mx-auto">
          <Experience />
        </div>
        <div className="mt-28 mx-auto ">
          <Contact />
        </div>
      </div>
    </>
  );

 
}
