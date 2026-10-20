import type { Movie } from "../types/types";

type MovieCardProps = {
  movie: Movie;
};

export const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <article className="flex flex-col gap-2">
      {movie.poster ? (
        <img
          src={movie.poster}
          alt={movie.title}
          className="aspect-2/3 w-full rounded-xl border border-divider object-cover"
        />
      ) : (
        <div
          role="img"
          aria-label={movie.title}
          className="flex aspect-2/3 w-full items-center justify-center rounded-xl border border-divider bg-film p-4"
        >
          <span className="line-clamp-5 text-center text-sm tracking-wide text-gray-100 uppercase">
            {movie.title}
          </span>
        </div>
      )}
      <h3 className="text-base">{movie.title}</h3>
      {movie.year ? <p className="text-sm text-gray-600">{movie.year}</p> : null}
    </article>
  );
};
