import { useState } from "react";

const inputsOf = (form: HTMLFormElement) =>
  Array.from(form.elements).filter(
    (element): element is HTMLInputElement => element instanceof HTMLInputElement,
  );

export const useFieldErrors = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateField = (field: HTMLInputElement) => {
    setErrors((current) => ({ ...current, [field.name]: field.validationMessage }));
  };

  const validateForm = (form: HTMLFormElement) => {
    setErrors(
      Object.fromEntries(inputsOf(form).map((field) => [field.name, field.validationMessage])),
    );

    return form.checkValidity();
  };

  return { errors, validateField, validateForm };
};
