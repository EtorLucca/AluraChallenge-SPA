import React, { useState } from "react";

function Search({ onSearch }) {
  const [query, setQuery] = useState("");

  return (
    <div className="search">
      <input
        placeholder="Busque por algo"
        type="text"
        name="query"
        id="query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="btn__search" onClick={() => onSearch(query)}>Procurar</button>
    </div>
  );
}

export default Search;
