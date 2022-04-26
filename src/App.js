import { useState } from "react";
import "./App.css";
import Table from "./Table";

import { Users } from "./users";

function App() {
  const [query, setQuery] = useState("");
  const searchFunc = (data) => {
    return data.filter((user) =>
      user.first_name.toLowerCase().startsWith(query)
    );
  };

  return (
    <div className="App">
      <div className="search_box">
        <input
          placeholder="Search..."
          className="search_input"
          type="text"
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />
      </div>
      <Table data={searchFunc(Users)} />
    </div>
  );
}

export default App;
