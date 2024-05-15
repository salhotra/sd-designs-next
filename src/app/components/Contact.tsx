import clsx from "clsx";
import Image from "next/image";
import React, { useCallback } from "react";
import { useForm } from "react-hook-form";

import InputWrapper from "../ui/form/InputWrapper";
import { Button } from "../ui/form/Button";
import Overlay from "./Overlay";
import { toast } from "react-toastify";

export default function Contact() {
  const [loading, setLoading] = React.useState<boolean>(false);

  const formMethods = useForm();

  const inputClasses = clsx(
    "w-full border-1 rounded p-4 mr-4 mb-6 md:mb-0",
    "focus:outline-none focus:ring-2 focus:ring-magenta focus:border-transparent",
  );

  const errors = formMethods.formState.errors;

  const submitForm = useCallback(
    // TODO: Fix types
    async (data: any) => {
      setLoading(true);

      try {
        const { fullName, email, phone } = data;
        const nameParts = fullName.split(" ");
        const lastName = nameParts.pop();
        const firstName = nameParts.join(" ");

        const response = await fetch("/api/lead-enquiry", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ firstName, lastName, email, phone }),
        });

        if (!response.ok) {
          throw new Error("An error occurred while submitting the form.");
        }

        toast("Form successfully submitted! We will get back to you soon.", {
          type: "success",
          position: "bottom-right",
        });
        formMethods.reset();
      } catch (e) {
        console.error(e);
        toast(
          "An error occurred while submitting the form. Please try again.",
          {
            type: "error",
            position: "bottom-right",
          },
        );
      } finally {
        setLoading(false);
      }
    },
    [formMethods],
  );

  return (
    <div id="contact">
      <div className="md:h-[320px] h-[150px] relative">
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
      <div className="flex flex-col items-center justify-center bg-white md:px-12 px-8 md:py-[100px] py-[40px] relative">
        <h1 className="md:text-4xl text-2xl md:mb-20 mb-8 uppercase text-golden-200">
          Contact Our Office
        </h1>

        <div className="w-full">
          <form
            className="flex flex-col items-center"
            onSubmit={formMethods.handleSubmit(submitForm)}
          >
            <div className="flex md:flex-row flex-col w-full">
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

              <InputWrapper required label="Phone Number" error={errors.phone}>
                <input
                  type="tel"
                  required
                  className={inputClasses}
                  placeholder={"Phone Number"}
                  {...formMethods.register("phone", {
                    required: true,
                    pattern: /^[0-9]{10}$/,
                  })}
                />
              </InputWrapper>
            </div>

            <Button
              type="secondary"
              onClick={formMethods.handleSubmit(submitForm)}
              className="md:mt-16 mt-4"
              loading={loading}
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
