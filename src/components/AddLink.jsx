import { useRef } from "react";

const AddLink = ({ addLink }) => {
  const inputElement = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    const newLink = inputElement.current.value;
    addLink(newLink);
    inputElement.current.value = "";
  }

  return (
    <form className="addLinkContainer" onSubmit={handleSubmit}>
      <input ref={inputElement} placeholder="Add Link" />
      <button className="utilityButton" type="submit">Add</button>
    </form>
  )
}

export default AddLink