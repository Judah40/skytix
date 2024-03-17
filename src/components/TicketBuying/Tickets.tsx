import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const registrationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phoneNumber: Yup.string().matches(/^[0-9]+$/, "Must be only digits").min(10, 'Must be exactly 10 digits').max(10, 'Must be exactly 10 digits').required('Phone number is required'),
  numberOfTickets: Yup.number().min(1, 'At least one ticket is required').required('Number of tickets is required'),
  ticketType: Yup.string().required('Ticket type is required'),
});

function Tickets() {
  return (
    <div className="w-full h-full">
      <Formik
        initialValues={{ name: '', email: '', phoneNumber: '', numberOfTickets: '', ticketType: '' }}
        validationSchema={registrationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-6 md:space-y-0 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <Field type="text" name="name" className="mt-1 block w-full border border-gray-300 p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"/>
              <ErrorMessage name="name" component="div" className="text-red-500 text-xs italic" />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <Field type="email" name="email" className="mt-1 block w-full border border-gray-300 p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"/>
              <ErrorMessage name="email" component="div" className="text-red-500 text-xs italic" />
            </div>

            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
              <Field type="text" name="phoneNumber" className="mt-1 block w-full border border-gray-300 p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"/>
              <ErrorMessage name="phoneNumber" component="div" className="text-red-500 text-xs italic" />
            </div>

            <div>
              <label htmlFor="numberOfTickets" className="block text-sm font-medium text-gray-700">Number of Tickets</label>
              <Field type="number" name="numberOfTickets" className="mt-1 block w-full border border-gray-300 p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"/>
              <ErrorMessage name="numberOfTickets" component="div" className="text-red-500 text-xs italic" />
            </div>

            <div>
              <label htmlFor="ticketType" className="block text-sm font-medium text-gray-700">Ticket Type</label>
              <Field as="select" name="ticketType" className="mt-1 block w-full border border-gray-300 p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                <option value="">Select a type</option>
                <option value="general">General Admission</option>
                <option value="vip">VIP</option>
              </Field>
              <ErrorMessage name="ticketType" component="div" className="text-red-500 text-xs italic" />
            </div>

            <button type="submit" disabled={isSubmitting} className="w-full p-3 bg-blue-500 rounded-lg text-white">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Tickets
