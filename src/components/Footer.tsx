'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaFacebook, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter,FaTiktok } from "react-icons/fa6";

function Footer() {
  const path = usePathname().split("/")[2];

  return (
    <footer className="w-full bg-blue-900 p-12 items-center flex flex-col ">
      {/* container */}
      <div className="grid grid-cols-1 md:grid-cols-2   md:place-items-center  space-y-8">
        {/* section1 */}
        <div className=" space-y-2 flex md:flex-col ">
          <div>
          <img
             src={path===""?"images/starrtix.png":"/images/starrtix.png"}
             className=" w-20"
             alt="image"
             />
            {/* web description */}
            <p className="text-white text-sm font-thin w-11/12">
              StarrTix is a global self-service platform for live experiences that
              allows anyone to create share find and attend events athat fuel
              their passions and enrich their lives
            </p>
          </div>

          {/* social media */}
          <div className="flex space-x-4">
            {/* facebook */}
            <Link
            href={"https://www.facebook.com/profile.php?id=61558472874858"}
            >
              <FaFacebook size={32} color="white" />
            </Link>
            {/* twitter */}
            <Link
            href={"https://www.instagram.com/starrtix_01?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="}
            >
              <FaInstagramSquare size={32} color="white"/>
            </Link>
            {/* twitter */}
            <Link
            href={"https://www.tiktok.com/@starrtix?_r=1&_d=edcm3ejlg89ii9&sec_uid=MS4wLjABAAAARxNlB2KzTip3wHEmn9HxFeBC9AcN7xRGOV96owuAdN8BEcCtZbDKqrC_2-7BWp6l&share_author_id=7356357634645705733&sharer_language=en&source=h5_m&u_code=edfg1l9kcld1bc&ug_btm=b8727,b0&social_share_type=4&utm_source=copy&sec_user_id=MS4wLjABAAAARxNlB2KzTip3wHEmn9HxFeBC9AcN7xRGOV96owuAdN8BEcCtZbDKqrC_2-7BWp6l&tt_from=copy&utm_medium=ios&utm_campaign=client_share&enable_checksum=1&user_id=7356357634645705733&share_link_id=4909AE9F-4773-4CC0-A563-5562CADCCD5C&share_app_id=1233"}
            >
              <FaTiktok size={32} color="white" />
            </Link>
          </div>
        </div>

        {/* section 2 */}
        <div className="grid grid-cols-2 lg:gap-20 gap-10 ">
          <div className=" space-y-2 flex flex-col text-white">
            <h1 className=" text-white font-bold">Plan Events</h1>
            <ul className="flex flex-col space-y-2">
              <li>
                <Link href={"/User/Dashboard"}>
                  <p className="font-light text-sm">Create ans Setup</p>
                </Link>
              </li>
              <li>
                <Link href={"/User/Marketing"}>
                  <p className="font-light text-sm">Sell Ticket</p>
                </Link>
              </li>
    
            </ul>
          </div>
          <div className=" space-y-2 flex flex-col text-white  items-end md:items-start">
        
            <ul className="flex flex-col space-y-2 items-end md:items-start">
              <li>
                <Link href={"/User/About"}>
                  <p className="font-light text-sm">About Us</p>
                </Link>
              </li>
              <li>
                <Link href={"/User/Contact"}>
                  <p className="font-light text-sm">Contact Us</p>
                </Link>
              </li>
              <li>
                <Link href={""}>
                  <p className="font-light text-sm">Privacy</p>
                </Link>
              </li>
              <li>
                <Link href={""}>
                  <p className="font-light text-sm">Terms</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>

       
      </div>

      <hr className="mt-8 mb-8" />
      <div className="w-full flex justify-center text-white text-sm">
        copyright @ 2024
      </div>
    </footer>
  );
}

export default Footer;
