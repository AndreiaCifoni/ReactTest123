import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component {
  // state = { videos: [] };

  // onSearchSubmit = async () => {
  //   const response = await youtube.get("url", {
  //     params: { query, term },
  //   });
  // };

  render() {
    return (
      <div className="ui container">
        <SearchBar />
      </div>
    );
  }
}

export default App;
