import tmdbLogo from "../images/tmdb-logo.svg";

export const Footer = () => {
  return (
    <footer className="bg-surface">
      <div className="mx-auto flex max-w-page flex-col gap-3 px-4 py-4 text-xs text-gray-600 md:gap-4 md:px-8 md:py-5 md:text-sm">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Cineteca · Proyecto de Ana Ríos</p>
          <a
            href="https://www.themoviedb.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="self-start transition hover:opacity-80 md:self-auto"
          >
            <img src={tmdbLogo} alt="The Movie Database (TMDB)" className="h-2.5 md:h-3" />
          </a>
        </div>

        <p className="text-xs md:text-right">
          This product uses the TMDB API but is not endorsed or certified by TMDB.
        </p>
      </div>
    </footer>
  );
};
