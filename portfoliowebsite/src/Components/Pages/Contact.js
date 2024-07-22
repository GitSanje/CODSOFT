import React from "react";
import Heading from "../partials/Heading";
import Input from "../partials/Input";
import Button from "../partials/Button";

const Contact = () => {
  const inputObject = [
    { type: "text", placeholder: "Your Name" },
    { type: "text", placeholder: "Your Email" },
    { type: "text", placeholder: "Your Phone" },
  ];
  return (
    <>
      <div className="py-16" style={{ background: "#222222" }}>
        <Heading first="Get" last="In Touch" />

        <div className="grid grid-cols-1 md:grid-cols-2  gap-4 px-8  lg:p-28">
          <div className="col-span-1  flex flex-col space-y-4  ">
            <div className="hidden  md:block">
              <Heading first="Get In Touch" last="" />
            </div>
            {inputObject.map((inpt, index) => (
              <Input
                type={inpt.type}
                placeholder={inpt.placeholder}
                key={index}
              />
            ))}
            <textarea
              placeholder="Write message"
              className="p-3 text-white bg-gray-700 focus: bg-gray-600 rounded outline-none"
              rows="10"
              cols="50"
              style={{ width: "100%", height: "200px" }}
            ></textarea>
            <div className="pt-8">
              <Button
                content="Send message"
                className="rounded-full "
                link="#"
              />
            </div>
          </div>
          <div className=" col-span-1  ">
            <Heading first="My Contact Details" last="" />

            <div className="p-8 bg-gray-800 text-white rounded-lg max-w-md mx-auto mt-4">
              <div className="mb-4">
                <h2 className="text-lg font-semibold">EMAIL</h2>
                <p className="text-gray-400">site@gmail.com</p>
              </div>
              <div className="mb-4">
                <h2 className="text-lg font-semibold">PHONE</h2>
                <p className="text-gray-400">+30 976 1382 9921</p>
              </div>
              <div className="mb-4">
                <h2 className="text-lg font-semibold">FAX</h2>
                <p className="text-gray-400">+30 976 1382 9922</p>
              </div>
              <div className="mb-4">
                <h2 className="text-lg font-semibold">ADDRESS</h2>
                <p className="text-gray-400">San Francisco, CA</p>
                <p className="text-gray-400">
                  4th Floor, 8 Lower San Francisco street, M1 50F
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
