'use client'
import Homwrapper from "@/components/Homwrapper";
import React, { useEffect, useState } from "react";
import Animation from "../../../../public/Lottie/Animation.json";
import Lottie from "lottie-react";
import { getAllBlog } from "@/api/Auth";
import Link from "next/link";
import Image from "next/image";

interface blog{
  id:number;
  title: string;
  description: string;
  category: string;
  image: string;
  video: string;
}
function page() {
  const [blog, setBlog]=useState<blog[]>([])


  const getAllBlogs=()=>{
    getAllBlog().then((blogs)=>{
      setBlog(blogs)
      console.log(blogs)
    }).catch((error)=>{})
  }

  useEffect(()=>{
    getAllBlogs()
  },[])
  return (
    <Homwrapper>
      <div
        style={{
          backgroundImage: `url('/images/blog.jpg')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className=" text-white h-[700px] md:h-[600px]"
      >
        <div className="h-full flex spce-y-4 flex-col items-center pt-32 lg:pt-40 w-full bg-blue-500 bg-opacity-50">
          <h1 className="text-4xl">Blogs</h1>
          <div className="w-10/12 mt-2 md:w-8/12">
            <h1 className="text-center">
              Event blogging is a dynamic and engaging niche that captures the
              essence of momentous occasions across various themes, from local
              community gatherings to international festivals. As event
              bloggers, we have the unique opportunity to transport our readers
              to the heart of each event, offering them front-row insights and
              experiences through vivid storytelling and rich multimedia
              content.
            </h1>
          </div>
          <Lottie
              animationData={Animation}
              loop={true}
              style={{ width: 200, height: 200 }}
            />
        </div>
      </div>



      {/* blogs */}

        {/* values */}
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-12 p-6">
          {blog &&
            blog.slice(0,6).map((values, index) => (
              <Link href={{
                pathname:'/Pages/Blogdetails',
                query:{
                  id:values.id,
                }
              }} key={index} className="border rounded p-2 hover:border-blue-500 hover:bg-blue-200">
                <Image
                  src={values.image}
                  alt="blog image"
                  width={100}
                  height={100}
                  className="w-full h-68"
                />

                <div className="w-full font-bold">{values.title}</div>
                {/* <div className="w-full space-x-2 text-gray-500 flex items-center">
                  <FaLocationDot />
                  <h1>{values.location}</h1>
                </div>
                <div className="w-full space-x-2 text-gray-500 flex items-center">
                  <IoCalendar />
                  <h1>{values.date}</h1>
                </div> */}
                <div className="w-full  text-gray-500 flex items-center">
                  <h1>{values.description}</h1>
                </div>
              </Link>
            ))}
        </div>
    </Homwrapper>
  );
}

export default page;
