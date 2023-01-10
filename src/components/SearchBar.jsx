import { useState } from "react"

const SearchBar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  function handleChange(event) {
    event.preventDefault();
    setInputValue(event.target.value);

    if (inputValue.length > 0) {
      onSearch(event.target.value);
    }
  }

  return (
    <form className="searchBarContainer">
      <input placeholder="Search..." onChange={handleChange} type="search" value={inputValue} />
    </form>
  )
}

export default SearchBar