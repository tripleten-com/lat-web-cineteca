export const MovieGridSkeleton = () => {
  return (
    <div
      aria-label="Cargando películas"
      className="grid grid-cols-2 gap-x-4 gap-y-5 md:grid-cols-5 md:gap-x-5 md:gap-y-7"
    >
      {Array.from({ length: 10 }, (_, index) => (
        <div key={index} className="flex animate-pulse flex-col gap-2">
          <div className="aspect-2/3 w-full rounded-xl bg-gray-100" />
          <div className="h-4 w-3/4 rounded bg-gray-100" />
          <div className="h-3 w-1/3 rounded bg-gray-100" />
        </div>
      ))}
    </div>
  );
};
