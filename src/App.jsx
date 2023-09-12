import { useEffect, useState } from "react";
import GetMovies from "./Components/GetMovies";
import SearchBar from "./Components/SearchBar";

function App() {
  const [searchQuery, setsearchQuery] = useState("");

  useEffect(() => {
    console.log(searchQuery);

    return () => {
      // second
    };
  }, [searchQuery]);

  return (
    <>
      <SearchBar setsearchQuery={setsearchQuery} />
      <GetMovies searchQuery={searchQuery} />
    </>
  );
}

export default App;
