import { useEffect } from "react";
import "./App.css";

import SplitBill from "./components/SplitBill";
import { BillProvider } from "./hooks/BillContext";

function App() {
  useEffect(() => {
    document.title = "Split Bill | React";
  }, []);

  return (
    <BillProvider>
      <SplitBill />
    </BillProvider>
  );
}

export default App;
