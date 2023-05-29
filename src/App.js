import logo from "./logo.svg";
import "./App.css";
import Name from "./Components/Name";
import Picture from "./Components/Picture";

function App() {
  const user = {
    name: "Mohamed",
    age: 38,
    job: "student",
    pic: "https://img.freepik.com/premium-vector/business-man-cartoon-character-smart-clothes-office-style_51635-5680.jpg?w=2000",
  };
  return (
    <div className="App">
      <Name firstName={user.name} MoahmedAge={user.age} mohamedJob={user.job} />
      <Picture normal="this is a normal props"></Picture>
    </div>
  );
}

export default App;
