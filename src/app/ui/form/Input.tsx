import clsx from "clsx";
import React from "react";

interface Props {
  placeholder: string;
  required?: boolean;
  type: "text" | "textArea" | "email" | "phone";
}

function Input({ type, required, placeholder }: Props): JSX.Element {
  return (
    <input
      type="text"
      required={required}
      className={clsx(
        "w-full border-1 rounded p-4",
        "focus:outline-none focus:ring-4 focus:ring-blue-500 focus:border-transparent",
      )}
      placeholder={placeholder}
    />
  );
}

interface InputWrapperProps extends Props {
  label?: string;
}

export function InputWrapper({
  label,
  ...rest
}: InputWrapperProps): JSX.Element {
  return (
    <div className="flex flex-col flex-1 mr-4">
      {label && (
        <span className="text-xl mb-1">
          {label} {rest.required ? "*" : ""}
        </span>
      )}
      <Input {...rest} />
    </div>
  );
}

export default Input;
