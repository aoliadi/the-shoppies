import { useEffect, useState } from "react";
import GetMovies from "./Components/GetMovies";
import ShowMovies from "./Components/ShowMovies";
import Loader from "./Components/Loader";
import "./index.css";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log(searchResults);

    return () => {
      // second
    };
  }, [searchResults]);

  return (
    <>
      <section className="">
        {/* <section className="" style={{ border: "2px solid red" }}> */}
        <GetMovies
          setSearchQuery={setSearchQuery}
          searchQuery={searchQuery}
          setSearchResults={setSearchResults}
          setIsLoading={setIsLoading}
        />
        {isLoading ? (
          <>
            <Loader />
          </>
        ) : (
          <>
            <ShowMovies searchResults={searchResults} />
          </>
        )}
      </section>
    </>
  );
}

export default App;
