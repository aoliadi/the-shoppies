import { useEffect, useState } from "react";
import GetMovies from "./Components/GetMovies";
import SearchBar from "./Components/SearchBar";
// import "./index.css";

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
        <SearchBar setSearchQuery={setSearchQuery} />
        <GetMovies
          searchQuery={searchQuery}
          setSearchResults={setSearchResults}
        />
      </section>
    </>
  );
}

export default App;
