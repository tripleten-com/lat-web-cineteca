import { Link, useLocation } from "react-router-dom";

import logo from "../images/logo.svg";
import { AuthSwitchLink } from "./AuthSwitchLink";

const buttonClasses =
  "inline-flex h-8 w-28 items-center justify-center rounded-lg text-sm transition md:h-10 md:w-38 md:rounded-xl";

export const NavBar = () => {
  const { pathname } = useLocation();
  const isAuthPage = pathname === "/login" || pathname === "/register";

  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-page flex-wrap items-center md:h-16 md:px-8">
        <Link
          to="/"
          className="order-1 flex h-14 items-center pl-3 transition hover:opacity-90 md:h-full md:pl-0"
        >
          <img src={logo} alt="Cineteca" className="h-5.5" />
        </Link>

        {isAuthPage ? (
          <AuthSwitchLink className="order-2 ml-auto hidden pr-3 md:block md:pr-0" />
        ) : (
          <div className="order-2 ml-auto flex items-center gap-1.5 pr-3 text-sm md:order-3 md:gap-2.5 md:pr-0">
            <Link
              to="/login"
              className={`${buttonClasses} bg-accent text-gray-900 hover:brightness-95`}
            >
              Iniciar sesión
            </Link>
            <Link
              to="/register"
              className={`${buttonClasses} bg-gray-900 text-white hover:bg-gray-800`}
            >
              Crear cuenta
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};
