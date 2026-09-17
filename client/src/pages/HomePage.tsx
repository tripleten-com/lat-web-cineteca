import searchIcon from "../images/search.svg";

export const HomePage = () => {
  return (
    <>
      <section className="bg-surface">
        <div className="mx-auto flex max-w-page flex-col gap-4 px-4 pt-6 pb-5 md:gap-6 md:px-8 md:pt-12 md:pb-10">
          <h1 className="text-5xl md:text-6xl">Busca una película</h1>

          <div className="flex flex-col gap-4 md:max-w-160 md:flex-row md:gap-3">
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
              type="button"
              className="h-12 self-start rounded-xl bg-accent px-6 text-base transition hover:brightness-95 md:h-14 md:self-auto md:px-8 md:text-lg"
            >
              Buscar
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-page px-4 pt-5 pb-6 md:px-8 md:py-8">
        <h2 className="hidden text-3xl md:mb-6 md:block">Películas</h2>

        <div className="grid grid-cols-2 gap-x-4 gap-y-5 md:grid-cols-5 md:gap-x-5 md:gap-y-7">
          <article className="flex flex-col gap-2">
            <img
              src="https://image.tmdb.org/t/p/w342/mJRUREPjTqqMEKwEiM2sdmIGngz.jpg"
              alt="Oppenheimer"
              className="aspect-2/3 w-full rounded-xl border border-divider object-cover"
            />
            <h3 className="text-base">Oppenheimer</h3>
            <p className="text-sm text-gray-600">2023</p>
          </article>

          <article className="flex flex-col gap-2">
            <img
              src="https://image.tmdb.org/t/p/w342/9tkJPQb4X4VoU3S5nqLDohZijPj.jpg"
              alt="La sociedad de la nieve"
              className="aspect-2/3 w-full rounded-xl border border-divider object-cover"
            />
            <h3 className="text-base">La sociedad de la nieve</h3>
            <p className="text-sm text-gray-600">2023</p>
          </article>

          <article className="flex flex-col gap-2">
            <img
              src="https://image.tmdb.org/t/p/w342/d1QKiYtceF3GDtxvTFXFAqwwah9.jpg"
              alt="Interstellar"
              className="aspect-2/3 w-full rounded-xl border border-divider object-cover"
            />
            <h3 className="text-base">Interstellar</h3>
            <p className="text-sm text-gray-600">2014</p>
          </article>

          <article className="flex flex-col gap-2">
            <img
              src="https://image.tmdb.org/t/p/w342/4N55tgxDW0RRATyrZHbx0q9HUKv.jpg"
              alt="Parásitos"
              className="aspect-2/3 w-full rounded-xl border border-divider object-cover"
            />
            <h3 className="text-base">Parásitos</h3>
            <p className="text-sm text-gray-600">2019</p>
          </article>

          <article className="flex flex-col gap-2">
            <img
              src="https://image.tmdb.org/t/p/w342/2RcxjDykOssx4SfqshewyI9vfSl.jpg"
              alt="El viaje de Chihiro"
              className="aspect-2/3 w-full rounded-xl border border-divider object-cover"
            />
            <h3 className="text-base">El viaje de Chihiro</h3>
            <p className="text-sm text-gray-600">2001</p>
          </article>

          <article className="flex flex-col gap-2">
            <img
              src="https://image.tmdb.org/t/p/w342/xCHmhHeO7aOCMlzcNukGH6Q7EiD.jpg"
              alt="Dune: Parte dos"
              className="aspect-2/3 w-full rounded-xl border border-divider object-cover"
            />
            <h3 className="text-base">Dune: Parte dos</h3>
            <p className="text-sm text-gray-600">2024</p>
          </article>

          <article className="flex flex-col gap-2">
            <img
              src="https://image.tmdb.org/t/p/w342/uy36CPy5ARuC8qrH8Esg2ndFyJ5.jpg"
              alt="Whiplash"
              className="aspect-2/3 w-full rounded-xl border border-divider object-cover"
            />
            <h3 className="text-base">Whiplash</h3>
            <p className="text-sm text-gray-600">2014</p>
          </article>

          <article className="flex flex-col gap-2">
            <img
              src="https://image.tmdb.org/t/p/w342/vwsFGblLYxWBNjg9pdWN1Mm5YfW.jpg"
              alt="Coco"
              className="aspect-2/3 w-full rounded-xl border border-divider object-cover"
            />
            <h3 className="text-base">Coco</h3>
            <p className="text-sm text-gray-600">2017</p>
          </article>

          <article className="flex flex-col gap-2">
            <img
              src="https://image.tmdb.org/t/p/w342/veWGVw33lnifG10fpkz3QmimVaI.jpg"
              alt="Roma"
              className="aspect-2/3 w-full rounded-xl border border-divider object-cover"
            />
            <h3 className="text-base">Roma</h3>
            <p className="text-sm text-gray-600">2018</p>
          </article>

          <article className="flex flex-col gap-2">
            <img
              src="https://image.tmdb.org/t/p/w342/9R1zEZJkIah6GuLwFZWsuygn552.jpg"
              alt="Todo a la vez en todas partes"
              className="aspect-2/3 w-full rounded-xl border border-divider object-cover"
            />
            <h3 className="text-base">Todo a la vez en todas partes</h3>
            <p className="text-sm text-gray-600">2022</p>
          </article>
        </div>
      </section>
    </>
  );
};
