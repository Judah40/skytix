'use client';
import UserBlogPost from '@/components/UserBlogPost';
import Userdashboardwrapper from '../../../components/Userdashboardwrapper'
import React, { useState } from 'react'
import BlogCreation from '@/components/BlogCreationModal/BlogCreation';
import { IoIosCloseCircle } from 'react-icons/io';

function Page() {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <Userdashboardwrapper>
      <div className='text-gray-900 py-4'>

        {/* search and create and delete button below */}
        <div className='flex flex-row justify-between items-center p-4'>
          <div className='w-full flex justify-center items-center'>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3">
                <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input type="text" className="bg-none block w-full px-4 ps-10 text-sm text-gray-900  border-b border-t-0 border-l-0 border-r-0  border-blue-500" placeholder="Search" />
            </div>
          </div>
          <div className='flex justify-between gap-3 items-center px-2'>
            <button
              onClick={openModal}
              className="md:p-4 p-2 bg-blue-500 text-white hover:bg-blue-600"
            >
              Create
            </button>
            <button className="md:p-4 p-2 bg-blue-500 text-white hover:bg-blue-600">
              Delete
            </button>
          </div>
        </div>

        {/* blog posts below */}
        <div className='p-4'>
          <UserBlogPost />
        </div>
        {/* event creation modal */}
        {isOpen ? (
          <BlogCreation>
            <div className="w-full flex justify-end p-2">
              <button

                onClick={() => {
                  closeModal();
                }}>
                <IoIosCloseCircle size={24} color={"red"} />
              </button>
            </div>
            <div>form modal to create blog here</div>

          </BlogCreation>
        ) : null}
      </div>
    </Userdashboardwrapper>
  )
}

export default Page
