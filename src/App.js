import Nav from "./components/Nav";
import GifContainer from "./components/GifContainer";
import GlobalStyle from "./components/GlobalStyle";
import Search from "./components/Search";
import React, { useState, useEffect } from "react";

// States

function App() {
  const [gifs, setGifs] = useState(null);
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    let URL =
      "https://api.giphy.com/v1/gifs/trending?api_key=BfbPZGK6vQqT1aHDeHzE0SjBg2be4cil&limit=12&rating=g";
    fetch(URL)
      .then((data) => data.json())
      .then((data) => {
        setGifs(data.data);
        setIsReady(true);
      });
  }, []);
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Search setGifs={setGifs} />
      <GifContainer
        isReady={isReady}
        setIsReady={setIsReady}
        setGifs={setGifs}
        gifs={gifs}
      />
    </div>
  );
}

export default App;
