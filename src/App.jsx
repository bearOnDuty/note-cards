import "./style/App.css";
import Notes from "./components/Notes.jsx";
import Header from "./components/Header.jsx";

function App() {
  return (
    <div className="main">
      <Header />
      <Notes />
    </div>
  );
}
export default App;
