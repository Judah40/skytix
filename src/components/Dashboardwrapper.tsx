"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { MdDashboard } from "react-icons/md";
import { paths } from "@/api/dummyData";
import { FaCalendarAlt,FaUsers } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { IoSettings } from "react-icons/io5";
import { IoIosHome } from "react-icons/io";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { CiBank } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import AOS from "aos";
import { IoClose } from "react-icons/io5";
function Dashboardwrapper({ children }: any) {
  const pathname = usePathname().split("/");
  const [open, setOpened] = useState(false);

  useEffect(() => {
    console.log(pathname[2]);
  }, []);
  return (
    <div className="lg:flex ">

        {/* small screen dashboard header */}

        <div className="z-50 lg:hidden  text-white w-full bg-blue-500">
        <div className="z-50 flex w-full bg-blue-950 p-6 items-center">
          {/* logo */}
          <div>
            <h1 className="text-4xl font-bold  text-blue-500">
              Starr<span className="text-xl text-white text-border">tix</span>
            </h1>
          </div>

          {/* menu button */}
          <div className=" flex-1  justify-end flex items-center">
            {!open ? (
              <button className="" onClick={() => setOpened(true)}>
                <GiHamburgerMenu size={32} color={"white"} />
              </button>
            ) : (
              <button onClick={() => setOpened(false)}>
                <IoClose size={32} color={"white"} />
              </button>
            )}
          </div>
        </div>
        {/* navigation buttons */}

        <div className="bg-blue-950 z-50 w-full ">
          {open ? (
            <div data-aos="fade-up" className="space-y-6 p-6 bg-blue-950">
              {paths.map((value, index) => (
                <Link
                  key={index}
                  href={`/User/${value.value}`}
                  className={`w-full h-12 hover:bg-blue-900 flex items-center p-2 rounded-lg ${
                    value.value === pathname[2]
                      ? "bg-white shadow border border-gray-400 shadow-white"
                      : null
                  }`}
                >
                  <div className="flex w-full items-center  h-full ">
                    <div>
                      <h1
                        className={`hover:block   font-bold ${
                          value.value === pathname[2]
                            ? "text-black"
                            : "text-white"
                        }`}
                      >
                        {value.name}
                      </h1>
                    </div>

                    {/* icons */}
                    <div className="flex-1 justify-end flex w-full">
                      {value.value === "Dashboard" ? (
                        <IoIosHome
                          size={24}
                          color={`${
                            value.value === pathname[2] ? "black" : "white"
                          }`}
                        />
                      ) : value.value === "Marketing" ? (
                        <HiMiniSpeakerWave
                          size={24}
                          color={`${
                            value.value === pathname[2] ? "black" : "white"
                          }`}
                        />
                      ) : value.value === "Finance" ? (
                        <CiBank
                          size={24}
                          color={`${
                            value.value === pathname[2] ? "black" : "white"
                          }`}
                        />
                      ) : null}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      </div>
      <div className="h-screen space-y-4 bg-blue-900 relative lg:w-72 w-20 hidden lg:flex flex-col items-center">
        {/* header */}
        <div className="w-full h-16 border-b border-gray-400 flex justify-center items-center">
          <h1 className="text-sm lg:text-4xl font-bold  text-blue-500 p-4">
            Sky
            <span className="text-sm lg:text-xl text-white text-border">
              tix
            </span>
          </h1>
        </div>

        {/* Dashboard button  */}
        <div className="w-full h-full  flex flex-col items-center space-y-2">
          {paths.map((value, index)=>(
            <Link key={index} href={`/Admin/${value.value}`} className={`w-full h-12 flex items-center justify-center ${value.value===pathname[2]?"bg-white":null}`}>
            <div className=" flex items-center justify-start lg:w-10/12 h-full lg:space-x-4 ">
              {
                value.value==="Dashboard"?<MdDashboard size={24} color={`${value.value===pathname[2]?"black":"white"}`}/>:(
                  value.value==="Events" ? <FaCalendarAlt size={24} color={`${value.value===pathname[2]?"black":"white"}`}/>:(
                    value.value==="Reports"?<GoGraph size={24} color={`${value.value===pathname[2]?"black":"white"}`}/>:(
                      value.value==="Settings"?<IoSettings size={24} color={`${value.value===pathname[2]?"black":"white"}`}/>:(
                        value.value==="Users"?<FaUsers size={24} color={`${value.value===pathname[2]?"black":"white"}`}/>:null

                      )

                    )

                  )

                )

              }
            <h1 className={` hidden lg:block font-bold ${value.value===pathname[2]?"text-black":"text-white"}`}>
              {value.name}
            </h1>
            </div>
          </Link>
          ))}
        </div>
      </div>
      <div className="flex-1 h-screen overflow-scroll w-screen">{children}</div>
    </div>
  );
}

export default Dashboardwrapper;
