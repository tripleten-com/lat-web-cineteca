import { Link, useLocation } from "react-router-dom";

type AuthSwitchLinkProps = {
  className?: string;
};

export const AuthSwitchLink = ({ className }: AuthSwitchLinkProps) => {
  const { pathname } = useLocation();
  const isLogin = pathname === "/login";

  return (
    <p className={`text-sm text-gray-600 ${className}`}>
      {isLogin ? "¿No tienes cuenta? " : "¿Ya tienes cuenta? "}
      <Link to={isLogin ? "/register" : "/login"} className="text-gray-900 hover:underline">
        {isLogin ? "Crea una cuenta" : "Inicia sesión"}
      </Link>
    </p>
  );
};
