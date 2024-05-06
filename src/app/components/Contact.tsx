import React from "react";
import Input, { InputWrapper } from "../ui/form/Input";
import Heading from "../ui/form/Heading";
import clsx from "clsx";
import { Button } from "../ui/form/Button";

export default function Contact() {
  return (
    <div className="flex flex-col rounded-lg p-8">
      <h1 className="text-7xl mb-8 mt-12">Contact Us</h1>

      <div className="w-full">
        <form className="flex flex-col items-center">
          <div className="flex justify-between w-full">
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
          <Button onClick={() => console.log("Submit")} className="my-8">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
