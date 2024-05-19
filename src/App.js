import { useEffect } from "react";
import "./App.css";

import SplitBill from "./components/SplitBill";

function App() {
  useEffect(() => {
    document.title = "Split Bill | React";
  }, []);
  return (
    <div className="container" style={{ marginTop: "10rem" }}>
      <div className="text-center my-5 shadow py-3 fs-1">
        Split Bill | React Project
      </div>
      <SplitBill />
    </div>
  );
}

export default App;
