import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Class list</h1>
      <h2>{classRoster.map(printRoster)}</h2>
    </div>
  );
}

let classRoster = [
  { name: "Victor Lymar", pronoun: "He/Him" },
  { name: "Traci Siebel", pronoun: "She/Her" },
  { name: "Ana Rivera", pronoun: "She/her" },
  { name: "Ida Voong", pronoun: "She/Her" },
  { name: "Aidan Fuller", pronoun: "He/Him" },
  { name: "Kyle Wan", pronoun: "he/Him" },
  { name: "Enjun Li", pronoun: "he/Him" },
  { name: "Luis Garcia", pronoun: "He/Him" },
  { name: "Amanda Yu", pronoun: "She/Her" },
  { name: "Yifei Du", pronoun: "He/Him" },
  { name: "Hector Del Valle", pronoun: "He/Him" },
  { name: "Haoyu Lin", pronoun: "He/Him" }
];

function printRoster(roster) {
  return (
    <div>
      <p>
        Name: {roster.name} Pronoun: {roster.pronoun}
      </p>
    </div>
  );
}
