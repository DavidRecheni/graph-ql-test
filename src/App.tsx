import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useQuery } from "@apollo/client/react";
import { gql } from "@apollo/client";
import DisplayMovie, { IFilm } from "./components/DisplayMovie/DisplayMovie";

function App() {
  const { loading, error, data } = useQuery(gql`
    {
      allFilms {
        films {
          title
        }
      }
    }
  `);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      {data && (
        <div>
          <h1>Star Wars Films</h1>
          <ul>
            {data.allFilms.films.map((film: IFilm) => (
              <DisplayMovie key={film.title} film={film} className="wide" />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
