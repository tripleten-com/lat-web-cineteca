import { Link } from "react-router-dom";

import { StatusMessage } from "../components/StatusMessage";
import noResultsIcon from "../images/no-results.svg";

export const NotFoundPage = () => {
  return (
    <section className="mx-auto max-w-page px-4 py-8 md:px-8">
      <StatusMessage
        icon={noResultsIcon}
        title="No encontramos esta página"
        text="Puede que la dirección esté mal escrita o que la página ya no exista."
        isPageTitle
      >
        <Link
          to="/"
          className="flex h-12 w-fit items-center rounded-xl bg-accent px-6 text-base text-gray-900 transition hover:brightness-95 md:h-14 md:px-8 md:text-lg"
        >
          Ir al inicio
        </Link>
      </StatusMessage>
    </section>
  );
};
