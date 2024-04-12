"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import Image from "next/image";



export default function AdminBlogPost() {


    const events = [
        {
            month: "AUG",
            day: "14",
            header: "Wonder Girls 2010 Wonder Girls World Tour San Francisco",
            description:
                "We’ll get you directly seated and inside for you to enjoy the show.",
            image: "../../images/event.jpg",
        },
        {
            month: "AUG",
            day: "14",
            header: "Wonder Girls 2010 Wonder Girls World Tour San Francisco",
            description:
                "We’ll get you directly seated and inside for you to enjoy the show.",
            image: "../../images/event1.jpg",
        },
        {
            month: "AUG",
            day: "14",
            header: "Wonder Girls 2010 Wonder Girls World Tour San Francisco",
            description:
                "We’ll get you directly seated and inside for you to enjoy the show.",
            image: "../../images/event2.jpg",
        },
        {
            month: "AUG",
            day: "14",
            header: "Wonder Girls 2010 Wonder Girls World Tour San Francisco",
            description:
                "We’ll get you directly seated and inside for you to enjoy the show.",
            image: "../../images/event3.jpg",
        },
        {
            month: "AUG",
            day: "14",
            header: "Wonder Girls 2010 Wonder Girls World Tour San Francisco",
            description:
                "We’ll get you directly seated and inside for you to enjoy the show.",
            image: "../../images/event4.jpg",
        },
        {
            month: "AUG",
            day: "14",
            header: "Wonder Girls 2010 Wonder Girls World Tour San Francisco",
            description:
                "We’ll get you directly seated and inside for you to enjoy the show.",
            image: "../../images/event.jpg",
        },
    ];
    const [highlightStates, setHighlightStates] = useState(Array(events.length).fill(false));
    const [highlightedIndex, setHighlightedIndex] = useState(null);

    let highlight = (index: number) => {
        const newHighlightStates = [...highlightStates]; // Create a copy of the highlightStates array
        newHighlightStates[index] = !newHighlightStates[index]; // Toggle the highlight state for the clicked item
        setHighlightStates(newHighlightStates); // Update the highlightStates state

        // Unhighlight the previously highlighted item if there is one
        if (highlightedIndex !== null && highlightedIndex !== index) {
            newHighlightStates[highlightedIndex] = false;
            setHighlightStates(newHighlightStates);
        }

        // Update the highlightedIndex state to the clicked item
        setHighlightedIndex(index);
    }
    return (
        <div className='grid md:grid-cols-3 gap-y-3 justify-center items-center gap-3'>
            {/* hero blog */}
            <div onClick={() => highlight(0)} key={0}
                className={`${highlightStates[0] ? 'border-b-4 border-l-4 border-r-4 border-blue-500 rounded-[18.95px]' : ''} md:col-span-2 row w-full h-full rounded flex flex-col justify-between`}>
                
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
                        src={events[0].image}
                        alt="pic"
                    />
                </div>
                {/* decription */}
                <div className=' flex flex-row justify-center items-center h-full w-full border rounded-b-[18.95px]'>
                    <div className="w-full p-4 flex space-x-2">
                        {/* date */}
                        <div className="text-center">
                            <p className="font-bold text-blue-500">{events[0].month}</p>
                            <h1>{events[0].day}</h1>
                        </div>

                        {/* decription */}
                        <div className="space-y-2">
                            <p className="text-xs font-bold">{events[0].header}</p>
                            <p className="text-xs font-thin">{events[0].description}</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className='grid grid-cols-1 md:grid-rows-2 gap-y-3'>
                <div onClick={() => highlight(1)} key={1}
                    className={`${highlightStates[1] ? 'border-b-4 border-l-4 border-r-4 border-blue-500 rounded-[18.95px]' : ''} w-full rounded h-full`}>

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
                            src={events[1].image}
                            alt="pic"
                        />
                    </div>
                    {/* decription */}
                    <div className="w-full p-4 flex space-x-2 border rounded-b-[18.95px]">
                        {/* date */}
                        <div className="text-center">
                            <p className="font-bold text-blue-500">{events[1].month}</p>
                            <h1>{events[1].day}</h1>
                        </div>

                        {/* decription */}
                        <div className="space-y-2">
                            <p className="text-xs font-bold">{events[1].header}</p>
                            <p className="text-xs font-thin">{events[1].description}</p>
                        </div>
                    </div>
                </div>
                <div onClick={() => highlight(2)} key={2}
                    className={`${highlightStates[2] ? 'border-b-4 border-l-4 border-r-4 border-blue-500 rounded-[18.95px]' : ''} w-full rounded h-full`}>

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
                            src={events[2].image}
                            alt="pic"
                        />
                    </div>
                    {/* decription */}
                    <div className="w-full p-4 flex space-x-2 border rounded-b-[18.95px]">
                        {/* date */}
                        <div className="text-center">
                            <p className="font-bold text-blue-500">{events[2].month}</p>
                            <h1>{events[2].day}</h1>
                        </div>

                        {/* decription */}
                        <div className="space-y-2">
                            <p className="text-xs font-bold">{events[2].header}</p>
                            <p className="text-xs font-thin">{events[2].description}</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* hero blog ends */}

            {/* blog data */}
            {events.map((value, index) => (
                <div onClick={() => highlight(index)}
                    className={`${highlightStates[index] ? 'border-b-4 border-l-4 border-r-4 border-blue-500 rounded-[18.95px]' : ''} w-full rounded`}
                    key={index}
                >
                    {/* {index > 2 ? ( */}
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
                                <div className="text-center">
                                    <p className="font-bold text-blue-500">{value.month}</p>
                                    <h1>{value.day}</h1>
                                </div>

                                {/* decription */}
                                <div className="space-y-2">
                                    <p className="text-xs font-bold">{value.header}</p>
                                    <p className="text-xs font-thin">{value.description}</p>
                                </div>
                            </div>
                        </div>
                    {/* ) : null} */}

                </div>
            ))}
        </div>
    )
}
