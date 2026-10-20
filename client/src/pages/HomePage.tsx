import searchIcon from "../images/search.svg";

export const HomePage = () => {
  return (
    <>
      <section className="bg-surface">
        <div className="mx-auto flex max-w-page flex-col gap-4 px-4 pt-6 pb-5 md:gap-6 md:px-8 md:pt-12 md:pb-10">
          <h1 className="text-5xl md:text-6xl">Busca una película</h1>

          <form className="flex flex-col gap-4 md:max-w-160 md:flex-row md:gap-3">
            <div className="relative flex-1">
              <img
                src={searchIcon}
                alt=""
                className="absolute top-1/2 left-4 size-5 -translate-y-1/2"
              />
              <label htmlFor="search" className="sr-only">
                Buscar por título
              </label>
              <input
                id="search"
                name="search"
                type="search"
                placeholder="Buscar por título…"
                className="h-14 w-full rounded-xl border border-divider bg-white pr-4 pl-12 text-base placeholder:text-gray-600"
              />
            </div>
            <button
              type="submit"
              className="h-12 self-start rounded-xl bg-accent px-6 text-base transition hover:brightness-95 md:h-14 md:self-auto md:px-8 md:text-lg"
            >
              Buscar
            </button>
          </form>
        </div>
      </section>

      <section className="mx-auto max-w-page px-4 pt-5 pb-6 md:px-8 md:py-8">
        <h2 className="hidden text-3xl md:mb-6 md:block">Películas</h2>
        <div className="grid grid-cols-2 gap-x-4 gap-y-5 md:grid-cols-5 md:gap-x-5 md:gap-y-7"></div>
      </section>
    </>
  );
};
