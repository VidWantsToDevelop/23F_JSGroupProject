import "./App.css";
import MainComponent from "./components/MainComponent";
import banana from "./banana-gif.gif";

function App({ initialIngredients }) {
  return (
    <div className="App">
      <div className="headerBasic">
        <h1>Recipe Maker</h1>
        <p>Heya! This React-based app allows you to search for various recipes using the ingredients chosen by you.</p>
        <p>Just move your chosen ingredients from the columns into "Your Pot" column and then click the button to get the recipe list!</p>
        <img src={banana} alt="banana dancing"></img>
        <p id="banana-id">P.S. Bananas rule the world!</p>
      </div>
      <MainComponent initialIngredients={ initialIngredients } />
      <footer>
        @React Demo App - Recipe Maker | JavaScript Frameworks Course - Georgian College | David Boldyrev, Anton Korchynskyi, Vladyslav Berestetskyi
      </footer>
    </div>
  );
}

export default App;
