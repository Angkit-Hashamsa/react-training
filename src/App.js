import "./App.css";
import Inputs from "./components/Inputs";
function App() {
  return (
    <div
      style={{
        width: "100%",
        textAlign: "center",
        height: "100vh",
        display: "grid",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Inputs />
    </div>
  );
}

export default App;
