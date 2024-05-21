import { useEffect } from "react";
import "./App.css";

import SplitBill from "./components/SplitBill";
import { BillProvider } from "./hooks/BillContext";

function App() {
  useEffect(() => {
    document.title = "Split Bill | React";
  }, []);
  return (
    <div className="container" style={{ marginTop: "10rem" }}>
      <div className="text-center my-5 shadow py-3 fs-1">
        Split Bill | React Project
      </div>
      <BillProvider>
        <SplitBill />
      </BillProvider>
    </div>
  );
}

export default App;
