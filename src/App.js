import logo from "./logo.svg";
import "./App.css";
import MainComponent from "./components/MainComponent";

function App() {
  return (
    <div className="App">
      <div className="headerBasic">
        <h1>Recipe Maker</h1>
        <p>Heya! This React-based app allows you to search for various recipes using the ingredients chosen by you.</p>
        <p>Just move your chosen ingredients from the columns into "Your Pot" column and then click the button to get the recipe list!</p>
      </div>
      <MainComponent />
    </div>
  );
}

export default App;
