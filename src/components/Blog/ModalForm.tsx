import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { uploadEventData } from "@/api/Auth";
import { Hourglass } from "react-loader-spinner";

interface FormValues {
  title: string;
  description: string;
  category: string;
  image: File | null;
  video: File | null;
}

interface ModalFormProps {
  isOpen: boolean;
  toggleModal: () => void;
}

const ModalForm: React.FC<ModalFormProps> = ({ isOpen, toggleModal }) => {
  if (!isOpen) return null;
  const [token, setToken] = useState<any>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
    category: Yup.string().required("Category is required"),
    image: Yup.mixed().required("An image is required"),
    video: Yup.mixed(),
  });

  const initialValues: FormValues = {
    title: "",
    description: "",
    category: "",
    image: null,
    video: null,
  };

  const getToken = async (): Promise<any> => {
    const tokens = await localStorage.getItem("token");
    setToken(tokens);
  };

  useEffect(() => {
    getToken();
  }, []);
  return (
    <div className="fixed inset-0 z-50 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="mt-3 text-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Add New Content
          </h3>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              setIsLoading(true);
              console.log(values);
              const data = {
                title: values.title,
                description: values.description,
                category: values.category,
                image: values.image,
                video: values.video,
                token: token,
              };
              if (values.image && values.video) {
                uploadEventData(data)
                  .then((Response) => {
                    console.log(Response.data);
                    setSubmitting(false);
                    toggleModal();
                    setIsLoading(false);
                  })
                  .catch((error) => {
                    setIsLoading(false);
                  });
              }
            }}
          >
            {({ setFieldValue }) => (
              <Form className="space-y-4">
                <Field
                  name="title"
                  type="text"
                  placeholder="Title"
                  className="w-full rounded-lg"
                />
                <Field
                  name="description"
                  as="textarea"
                  placeholder="Description"
                  className="w-full rounded-lg"
                />
                <Field
                  as="select"
                  name="category"
                  className="w-full rounded-lg"
                >
                  <option value="">Select Category</option>
                  <option value="news">News</option>
                  <option value="blog">Blog</option>
                  <option value="tutorial">Tutorial</option>
                </Field>
                <input
                  name="image"
                  type="file"
                  onChange={(event) => {
                    const files = event.currentTarget.files;
                    if (files && files.length > 0) {
                      setFieldValue("image", files[0]);
                    }
                  }}
                  className="w-full border-2 rounded-lg "
                />
                <input
                  name="video"
                  type="file"
                  onChange={(event) => {
                    const files = event.currentTarget.files;
                    if (files && files.length > 0) {
                      setFieldValue("video", files[0]);
                    }
                  }}
                  className="w-full border-2 rounded-lg "
                />
                <button
                  type="submit"
                  className="mt-4 bg-blue-500 text-white p-2 rounded w-8/12"
                >
                  {isLoading ? (
                    <Hourglass
                      height="20"
                      width="20"
                      colors={["white", "#72a1ed"]}
                      ariaLabel="circles-loading"
                      wrapperStyle={{}}
                      wrapperClass=""
                      visible={true}
                    />
                  ) : (
                    <h1> Submit</h1>
                  )}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ModalForm;
