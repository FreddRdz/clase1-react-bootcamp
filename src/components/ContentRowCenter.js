import { LastMovieInDb } from "./LastMovieInDb";
import { GenresInDeb } from "./GenresInDeb";

export const ContentRowCenter = () => {
  return (
    <div className='row'>
      <LastMovieInDb />
      <GenresInDeb />
    </div>
  );
};
