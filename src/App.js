import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/ui/Header";
import CharacterGrid from "./components/characters/CharacterGrid";
import Search from "./components/ui/Search";
import "./App.css";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchCharacters = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`);

      setCharacters(result.data);
      setIsLoading(false);
    }

    fetchCharacters();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Search getQuery={(userQuery) => setQuery(userQuery)}/>
      <CharacterGrid isLoading={isLoading} characters={characters} />
    </div>
  );
}

export default App;
