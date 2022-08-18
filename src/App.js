import { useRef } from "react";
import { usePeopleStore } from "./store/peoplestore";

function App() {
  const people = usePeopleStore((state) => state.people);
  const addPeople = usePeopleStore(state => state.addPeople);
  const inputRef = useRef();
  const handleAddPeople = () => {
    addPeople(inputRef.current.value);
    inputRef.current.value = '';
  }
  return (
    <>
      <h1>People list</h1>
      <input ref={inputRef} />
      <button onClick={handleAddPeople}>Add Person</button>
      <ul>
        {people.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
