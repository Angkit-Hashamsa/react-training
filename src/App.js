import "./App.css";
import CleanUp from "./components/cleanUp";
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
      <CleanUp />
    </div>
  );
}

export default App;
