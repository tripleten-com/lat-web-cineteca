export interface User {
  name: string;
}

export interface Movie {
  id: number;
  title: string;
  year: number | null;
  poster: string | null;
}
