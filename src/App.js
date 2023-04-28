import "./App.css";
import ConditionalRedndering from "./components/conditionalRedndering";
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
      <ConditionalRedndering />
    </div>
  );
}

export default App;
