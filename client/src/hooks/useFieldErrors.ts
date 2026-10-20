import { useState } from "react";

interface FieldErrors {
  name?: string;
  email?: string;
  password?: string;
}

const inputsOf = (form: HTMLFormElement) => Array.from(form.querySelectorAll("input"));

export const useFieldErrors = () => {
  const [errors, setErrors] = useState<FieldErrors>({});

  const validateField = (field: HTMLInputElement) => {
    setErrors((current) => ({ ...current, [field.name]: field.validationMessage }));
  };

  const validateForm = (form: HTMLFormElement) => {
    setErrors(
      Object.fromEntries(inputsOf(form).map((field) => [field.name, field.validationMessage])),
    );

    return form.checkValidity();
  };

  const setFieldError = (name: string, message: string) => {
    setErrors((current) => ({ ...current, [name]: message }));
  };

  return { errors, validateField, validateForm, setFieldError };
};
