import { AddPeople } from "./components/AddPeople";
import { usePeopleStore } from "./store/peoplestore";

function App() {
  const people = usePeopleStore((state) => state.people);
  return (
    <>
      <h1>People list</h1>
      <AddPeople />
      <ul>
        {people.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
