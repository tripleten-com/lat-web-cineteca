import type { SubmitEvent } from "react";

import { AuthSwitchLink } from "../components/AuthSwitchLink";
import { useFieldErrors } from "../hooks/useFieldErrors";

export const LoginPage = () => {
  const { errors, validateField, validateForm } = useFieldErrors();

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    validateForm(event.currentTarget);
  };

  return (
    <div className="mx-auto flex max-w-page flex-col items-center px-4 pt-6 pb-10 md:pt-16 md:pb-16">
      <form
        noValidate
        onSubmit={handleSubmit}
        className="flex w-full flex-col gap-4 rounded-3xl bg-white p-5 md:w-110 md:gap-6 md:p-10"
      >
        <h1 className="text-4xl">Inicia sesión</h1>

        <div className="flex flex-col gap-4">
          <div>
            <label htmlFor="email" className="sr-only">
              Correo electrónico
            </label>
            <div className="relative">
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Correo electrónico"
                aria-invalid={Boolean(errors.email)}
                onBlur={(event) => validateField(event.currentTarget)}
                className={`h-12 w-full rounded-xl border bg-white px-4 text-base placeholder:text-gray-600 md:h-14 ${
                  errors.email ? "border-error pr-12" : "border-divider"
                }`}
              />
              {errors.email ? (
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute top-1/2 right-4 flex size-5 -translate-y-1/2 items-center justify-center rounded-full bg-error text-xs text-white"
                >
                  !
                </span>
              ) : null}
            </div>
            {errors.email ? <p className="mt-1.5 text-sm text-error">{errors.email}</p> : null}
          </div>

          <div>
            <label htmlFor="password" className="sr-only">
              Contraseña
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type="password"
                required
                placeholder="Contraseña"
                aria-invalid={Boolean(errors.password)}
                onBlur={(event) => validateField(event.currentTarget)}
                className={`h-12 w-full rounded-xl border bg-white px-4 text-base placeholder:text-gray-600 md:h-14 ${
                  errors.password ? "border-error pr-12" : "border-divider"
                }`}
              />
              {errors.password ? (
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute top-1/2 right-4 flex size-5 -translate-y-1/2 items-center justify-center rounded-full bg-error text-xs text-white"
                >
                  !
                </span>
              ) : null}
            </div>
            {errors.password ? (
              <p className="mt-1.5 text-sm text-error">{errors.password}</p>
            ) : null}
          </div>
        </div>

        <button
          type="submit"
          className="h-12 w-fit rounded-xl bg-accent px-6 text-base transition hover:brightness-95 md:h-14 md:px-8 md:text-lg"
        >
          Entrar
        </button>

        <AuthSwitchLink className="text-center md:hidden" />
      </form>
    </div>
  );
};
