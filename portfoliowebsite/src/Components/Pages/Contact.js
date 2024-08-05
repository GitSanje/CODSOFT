import React, { useRef, useState } from "react";
import Heading from "../partials/Heading";
import Input from "../partials/Input";
import Button from "../partials/Button";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const Contact = () => {
  const initialInpts = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  const [inputs, setInputs] = useState(initialInpts);
  const form = useRef();

  const inputObject = [
    { type: "text", placeholder: "Your Name", name: "name", value: inputs.name, required: true },
    { type: "email", placeholder: "Your Email", name: "email", value: inputs.email, required: true },
    { type: "tel", placeholder: "Your Phone", name: "phone", value: inputs.phone, required: true },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!form.current.checkValidity()) {
      toast.error("Please fill out all required fields.");
      return;
    }

    const templateParams = {
      from_name: inputs.name,
      from_email: inputs.email,
      from_phone: inputs.phone,
      to_name: "Sanjay Karki",
      message: inputs.message,
    };

    emailjs
      .send("service_ynmkz3h", "template_q6z0m2l", templateParams, "D_aEMyE98RvNizMH7")
      .then(
        () => {
          toast.success("Email sent successfully!");
          setInputs(initialInpts); // Reset form state after success
        },
        (error) => {
          toast.error("Failed to send email...");
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <div className="py-16" style={{ background: "#222222" }}>
        <Heading first="Get" last="In Touch" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-8 lg:p-28">
          <form ref={form} onSubmit={sendEmail} noValidate>
            <div className="col-span-1 flex flex-col space-y-4">
              <div className="hidden md:block">
                <Heading first="Get In Touch" last="" />
              </div>

              {inputObject.map((inpt, index) => (
                <Input
                  type={inpt.type}
                  placeholder={inpt.placeholder}
                  name={inpt.name}
                  value={inpt.value}
                  required={inpt.required}
                  onChange={handleChange}
                  key={index}
                />
              ))}
              <textarea
                placeholder="Write message"
                className="p-3 text-white bg-gray-700 focus:bg-gray-600 rounded outline-none"
                rows="10"
                style={{ width: "100%", height: "200px" }}
                name="message"
                onChange={handleChange}
                value={inputs.message}
                required
              ></textarea>
              <div className="pt-8">
                <Button
                  content="Send message"
                  className="rounded-full"
                  link=""
                  input={true}
                />
              </div>
            </div>
          </form>
          <div className="col-span-1">
            <Heading first="My Contact Details" last="" />

            <div className="p-8 bg-gray-800 text-white rounded-lg max-w-md mx-auto mt-4">
              <div className="mb-4">
                <h2 className="text-lg font-semibold">EMAIL</h2>
                <p className="text-gray-400">karkisanjay2002@gmail.com</p>
              </div>
              <div className="mb-4">
                <h2 className="text-lg font-semibold">PHONE</h2>
                <p className="text-gray-400">+977 9808840951</p>
              </div>

              <div className="mb-4">
                <h2 className="text-lg font-semibold">ADDRESS</h2>
                <p className="text-gray-400">Satungal, Kathmandu, Bagmati</p>
                <p className="text-gray-400">CG Gate</p>
              </div>
            </div>
          </div>

          <ToastContainer
            position="top-right"
            autoClose={6000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      </div>
    </>
  );
};

export default Contact;
