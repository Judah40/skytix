"use client";

import { getBlogById } from "@/api/Auth";
import Homwrapper from "@/components/Homwrapper";
import React, { useEffect, useState } from "react";
import Animation from "../../../../public/Lottie/Animation.json";
import Lottie from "lottie-react";
import { Hourglass } from "react-loader-spinner";

interface blog {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  video: string;
}
type searchParams = {
  searchParams: {
    id: string;
  };
};
function page({ searchParams }: searchParams) {
  const [blog, setBlog] = useState<blog>();

  const getCurrentBlog = async () => {
    getBlogById(searchParams.id).then((blog) => {
      console.log(blog);
      setBlog(blog);
    });
  };

  useEffect(() => {
    getCurrentBlog();
  }, []);
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
        <div
          className={`w-full bg-blue-700 h-full  bg-opacity-50 flex md:flex-row    flex-col-reverse items-center justify-center gap-8 `}
        >
          <div className="h-full flex spce-y-4 flex-col items-center pt-32 lg:pt-40 w-full bg-blue-500 bg-opacity-50">
            <h1 className="text-4xl">Blogs</h1>
            <div className="w-10/12 mt-2 md:w-8/12">
              <h1 className="text-center">
                Event blogging is a dynamic and engaging niche that captures the
                essence of momentous occasions across various themes, from local
                community gatherings to international festivals. As event
                bloggers, we have the unique opportunity to transport our
                readers to the heart of each event, offering them front-row
                insights and experiences through vivid storytelling and rich
                multimedia content.
              </h1>
            </div>
            <Lottie
              animationData={Animation}
              loop={true}
              style={{ width: 200, height: 200 }}
            />
          </div>
        </div>
      </div>

      <div className="p-6 flex flex-col space-y-4">
        {
          !blog?
          <Hourglass
          height="60"
          width="60"
          colors={["white", "#72a1ed"]}
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
        :
        <div>

        <img
        alt="img"
        src={blog && blog?.image}
        className="rounded-lg"
        />
        <h1 className="text-4xl">{blog && blog.title}</h1>
        <h1 className="p-2 bg-blue-200 border border-blue-400">
          {blog && blog.category}
        </h1>
        <h1>
          {blog && blog.description}
        </h1>
        </div>
        }
      </div>


    </Homwrapper>
  );
}

export default page;
