export interface IFilm {
  title: string;
}

interface IProps extends React.HTMLAttributes<HTMLLIElement> {
  film: IFilm;
}

const DisplayMovie = ({ film, ...props }: IProps) => {
  return <li {...props}>{film.title}</li>;
};

export default DisplayMovie;
