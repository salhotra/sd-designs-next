import React from "react";
import { InputWrapper } from "../ui/form/Input";
import { Button } from "../ui/form/Button";

export default function Contact() {
  return (
    <div
      className="h-[1024px]"
      style={{
        backgroundImage: "url('/hero-1.jpg')",
      }}
    >
      <div className="flex flex-col items-center justify-center bg-white px-12 py-8 mt-[512px] h-[512px]">
        <h1 className="text-4xl mb-20 uppercase text-golden-200">
          Contact Our Office
        </h1>

        <div className="w-full">
          <form className="flex flex-col items-center">
            <div className="flex flex-row justify-between w-full">
              <InputWrapper
                required
                type="text"
                label="Full Name"
                placeholder="Full Name"
              />
              <InputWrapper type="email" label="Email" placeholder="Email" />
              <InputWrapper
                required
                type="text"
                label="Phone Number"
                placeholder="Phone Number"
              />
            </div>
            <Button
              onClick={() => console.log("Submit")}
              className="my-8 mt-16"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
