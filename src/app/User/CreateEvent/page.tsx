"use client";

import { postEvent } from "@/api/Auth";
import Step1 from "@/components/EventSteps/Step1";
import Step2 from "@/components/EventSteps/Step2";
import Step3 from "@/components/EventSteps/Step3";
import Step4 from "@/components/EventSteps/Step4";
import Homwrapper from "@/components/Homwrapper";
import { eventSteps } from "@/constants/Event";
import { FaCheckCircle } from "react-icons/fa";
import {useRouter} from "next/navigation"
import React, { useState } from "react";
import Image from "next/image";

function page() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [value1, setValue1] = useState<any>({});
  const [value2, setValue2] = useState<any>({});
  const [value3, setValue3] = useState<any>({});
  const [value4, setValue4] = useState<any>({});
  const [token, setToken] = useState<any>("");
  const [eventStatus, setEventStatus] = useState(false);
  const router = useRouter()
  // Function to navigate to the next screen
  const nextScreen = (value: number) => {
    if (currentIndex < screens.length - 1) {
      setCurrentIndex(currentIndex + value);
    }
  };
  //function that get values
  const values1 = (value: any) => {
    console.log(value);
    setValue1(value);
  };
  const values2 = (value: any) => {
    console.log(value);
    setValue2(value);
  };
  const values3 = (value: any) => {
    console.log(value);
    setValue3(value);
  };
  const values4 = (value: any) => {
    // console.log(value)
    // setValue4(value)
    const eventDetails = {
      title: value1.eventTitle,
      location: value1.fullAddress,
      date: value1.startDate,
      event: value1.startTime,
      eventstarttime: value1.startTime,
      eventendtime: value1.endTime,
      types: value2.eventType,
      description: value3.description,
      eventtags: "hello",
      eventPic: value3.flyer,
      eventVideo: value3.video,
      token: token,
    };
    const pics = {
      eventPic: value3.flyer,
      eventVideo: value3.video,
      token: token,
    };
    // //postevent
    postEvent(eventDetails)
      .then((res) => {
        console.log(res);
        setCurrentIndex(0);
        setValue1({});
        setValue2({});
        setValue3({});
        setValue4({});
        nextScreen(1);
        setEventStatus(true);
        router.replace("/User/Dashboard")
      })
      .catch((err) => {});
    // console.log(eventDetails)
    // console.log(value1, value2, value3, value4)

    // //post event pic
    // eventMedia(pics).then((res)=>{
    //   console.log(res)
    // })
    // console.log(value3.flyer.name,value3.video)
  };
  const screens = [
    <Step1 key={currentIndex} closeStep={nextScreen} Finalvalues={values1} />,
    <Step2 key={currentIndex} closeStep={nextScreen} Finalvalues={values2} />,
    <Step3 key={currentIndex} closeStep={nextScreen} Finalvalues={values3} />,
    <Step4 key={currentIndex} closeStep={nextScreen} Finalvalues={values4} />,
  ];

 
  return (
    <Homwrapper>
      <div
        style={{
          backgroundImage: `url('/background/main.jpg')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className=" text-white h-[400px] "
      >
      </div>
      <div className="flex flex-row justify-center lg:h-[600px]  p-6">

      <div className="hidden shadow border-2 lg:block w-6/12 h-full bg-red-500">
       <img src="/images/event1.jpg" alt="images" className="w-full h-full "/>
      </div>
        <div
          className={`bg-blue-100 shadow p-4 h-full w-full lg:w-6/12 border  bg-opacity-50 flex md:flex-row    flex-col-reverse items-center justify-center gap-8 `}
        >
            {
              eventStatus?
              <div className="w-full  flex flex-col items-center justify-center">
                <FaCheckCircle color="green" size={40}/>
                Successfully Created an Event
              </div>
              :
            <div>

              
              <div className="flex flex-row  space-x-8 justify-center ">
                {/* step preview */}
                {eventSteps.map((value) => (
                  <div   
                  className={` ${currentIndex+1>value.id?"text-green-500":""}`}
                  key={value.id}>{value.step}</div>
                ))}
              </div>
              {/* Render the current screen */}
              {screens[currentIndex]}
              {/* button */}       
            </div>
            }
        </div>
      </div>
    </Homwrapper>
  );
}

export default page;
