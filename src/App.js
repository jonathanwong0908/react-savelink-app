import { useState } from "react";
import AddLink from "./components/AddLink";
import LinkList from "./components/LinkList";
import SearchBar from "./components/SearchBar";

const defaultLinks = ["www.reddit.com", "www.localhost:3000", "www.xccelerate.com"]

function App() {
  const [links, setLinks] = useState(defaultLinks)
  const [filteredLinks, setFilteredLinks] = useState([]);

  function addNewLink(link) {
    setLinks(prevLinks => [...prevLinks, link]);
  }

  function searchLink(input) {
    if (input.length === 0) {
      setFilteredLinks([]);
    } else {
      setFilteredLinks(links.filter(link => link.includes(input)));
    }
  }

  return (
    <div className="app">
      <div className="mainContainer">
        <h1>SaveLink App</h1>
        <AddLink addLink={addNewLink} />
        <SearchBar onSearch={searchLink} />
        <LinkList links={filteredLinks.length > 0 ? filteredLinks : links} />
      </div>
    </div>
  );
}

export default App;
