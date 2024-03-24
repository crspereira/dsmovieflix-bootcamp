import { User } from './users';

export type Review = {
  id: number;
  text: string;
  movieId: number;
  user: User;
};
