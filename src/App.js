import "./App.css";
import SplitBill from "./components/SplitBill";

function App() {
  return (
    <div className="container" style={{ marginTop: "10rem" }}>
      <h1 className="text-center my-5 text-decoration-underline">Eat Nd Split</h1>
      <SplitBill />
    </div>
  );
}

export default App;
