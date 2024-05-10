import React from "react";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

interface InputWrapperProps {
  label: string;
  children: React.ReactNode;
  required?: boolean;
  // TODO: Fix types
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
}

function formatError(
  readableFieldName: string,
  error: FieldError | Merge<FieldError, FieldErrorsImpl<any>>,
) {
  if (error.type === "required") {
    return `Please enter your ${readableFieldName}`;
  }

  if (error.type === "pattern") {
    return `Invalid ${readableFieldName}`;
  }

  return error.message as string;
}

function InputWrapper({
  label,
  error,
  children,
  required,
}: InputWrapperProps): JSX.Element {
  return (
    <div className="flex flex-col flex-1 mr-4">
      <span className="text-xl mb-1">
        {label} {required ? "*" : ""}
      </span>
      {children}
      {error && (
        <span className="text-red-500 text-xs pt-2">
          {formatError(label, error)}
        </span>
      )}
    </div>
  );
}

export default InputWrapper;
