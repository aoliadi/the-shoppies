import { useEffect, useState } from "react";
import GetMovies from "./Components/GetMovies";
import ShowMovies from "./Components/ShowMovies";
import "./index.css";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    console.log(searchQuery);

    return () => {
      // second
    };
  }, [searchQuery]);

  useEffect(() => {
    console.log(searchResults);

    return () => {
      // second
    };
  }, [searchResults]);

  return (
    <>
      <section className="" style={{ border: "2px solid red" }}>
        <GetMovies
          setSearchQuery={setSearchQuery}
          searchQuery={searchQuery}
          setSearchResults={setSearchResults}
        />
        <ShowMovies />
      </section>
    </>
  );
}

export default App;
