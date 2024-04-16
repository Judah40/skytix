import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import { getAllBlog } from '@/api/Auth';


interface blog{
    title: string;
    description: string;
    category: string;
    image: string;
    video: string;
}

export default function AdminBlogPost() {
    const [blog, setBlog]=useState<blog[]>([])
    useEffect(()=>{
        getAllBlog().then((blog)=>{
            console.log(blog)
            setBlog(blog)
        }).catch((error)=>{})
    },[])
    return (
        <div className='grid md:grid-cols-3 gap-y-3 justify-center items-center gap-3'>
            {/* blog data */}
            {blog && blog.map((value, index) => (
                <div
                    className=' w-full rounded'
                    key={index}
                >
                    <div>
                        {/* img */}
                        <div className="w-full">
                            <Image
                                width={100}
                                height={100}
                                style={{
                                    width: "100%",
                                    borderTopLeftRadius: 18.95,
                                    borderTopRightRadius: 18.95,
                                }}
                                src={value.image}
                                alt="pic"
                            />
                        </div>
                        {/* decription */}
                        <div className="w-full p-4 flex space-x-2 border rounded-b-[18.95px]">
                            {/* date */}
                            {/* <div className="text-center">
                                <p className="font-bold text-blue-500">{value.month}</p>
                                <h1>{value.day}</h1>
                            </div> */}

                            {/* decription */}
                            <div className="space-y-2">
                                <p className="text-xs font-bold">{value.title}</p>
                                <p className="text-xs font-thin">{value.description}</p>
                            </div>
                        </div>
                    </div>


                </div>
            ))}
        </div>
    )
}
