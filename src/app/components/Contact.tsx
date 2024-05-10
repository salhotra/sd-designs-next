import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import React, { useCallback } from "react";
import Image from "next/image";

import InputWrapper from "../ui/form/InputWrapper";
import { Button } from "../ui/form/Button";
import { useForm } from "react-hook-form";
import Overlay from "./Overlay";
import clsx from "clsx";

export default function Contact() {
  const formMethods = useForm();

  const inputClasses = clsx(
    "w-full border-1 rounded p-4 mr-4",
    "focus:outline-none focus:ring-2 focus:ring-magenta focus:border-transparent",
  );

  const errors = formMethods.formState.errors;

  const submitForm = useCallback(
    // TODO: Fix types
    (data: any) => {
      console.log({ data, formMethods });
    },
    [formMethods],
  );

  return (
    <div>
      <div className="h-[320px] relative">
        <Overlay intensity="10">
          <Image
            fill
            src="/lights.jpg"
            quality={75}
            alt="Background"
            className="object-cover"
          />
        </Overlay>
      </div>
      <div className="flex flex-col items-center justify-center bg-white px-12 py-[100px]">
        <h1 className="text-4xl mb-20 uppercase text-golden-200">
          Contact Our Office
        </h1>

        <div className="w-full">
          <form
            className="flex flex-col items-center"
            onSubmit={formMethods.handleSubmit(submitForm)}
          >
            <div className="flex flex-row w-full">
              <InputWrapper required label="Full Name" error={errors.fullName}>
                <input
                  type="text"
                  required
                  className={inputClasses}
                  placeholder={"Full Name"}
                  {...formMethods.register("fullName", { required: true })}
                />
              </InputWrapper>

              <InputWrapper label="Email" error={errors.email}>
                <input
                  type="email"
                  className={inputClasses}
                  placeholder={"Email"}
                  {...formMethods.register("email", {
                    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  })}
                />
              </InputWrapper>

              <InputWrapper
                required
                label="Phone Number"
                error={errors.phoneNumber}
              >
                <input
                  type="tel"
                  required
                  className={inputClasses}
                  placeholder={"Phone Number"}
                  {...formMethods.register("phoneNumber", {
                    required: true,
                    pattern: /^[0-9]{10}$/,
                  })}
                />
              </InputWrapper>
            </div>

            <Button
              type="secondary"
              onClick={formMethods.handleSubmit(submitForm)}
              className="mt-16"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
