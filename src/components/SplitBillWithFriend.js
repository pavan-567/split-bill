import { useState } from "react";

export default function SplitBillWithFriend({ friend, handleBalance }) {
  const [bill, setBill] = useState("");
  const [expense, setExpense] = useState("");
  const [payBill, setPayBill] = useState("you");

  function handleRecievedBalance() {
    // My Cost
    const myExpense = expense;

    // Total Bill
    const totalBill = bill;

    // Other Person Cost
    const otherExpense = totalBill - myExpense;

    // Logic
    if (payBill === "you") {
      // Mine : 30
      handleBalance(friend, otherExpense);
    } else {
      // Clark : 40
      handleBalance(friend, -myExpense);
    }

    // Fields Reset
    setBill("");
    setExpense("");
    setPayBill("you");
  }

  return (
    <div className="p-4">
      {friend && (
        <>
          <div className="row">
            <h1>Split a Bill With {friend.name}</h1>
          </div>
          <div className="row mt-3">
            <div className="col-6">
              <label className="col-form-label">Bill Value</label>
            </div>
            <div className="col-6">
              <input
                type="number"
                value={bill}
                onChange={(e) => setBill(Number(e.target.value))}
                className="form-control"
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-6">
              <label className="col-form-label">Your Expense</label>
            </div>
            <div className="col-6">
              <input
                type="number"
                value={expense}
                onChange={(e) => setExpense(Number(e.target.value))}
                className="form-control"
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-6">
              <label className="col-form-label">{friend.name} Expense</label>
            </div>
            <div className="col-6">
              <input
                type="number"
                value={bill - expense}
                className="form-control"
                disabled
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-6">
              <label className="col-form-label">Who's Paying The Bill?</label>
            </div>
            <div className="col-6">
              <select
                className="form-select"
                value={payBill}
                onChange={(e) => setPayBill(e.target.value)}
              >
                <option value="you">You</option>
                <option value={friend.name}>{friend.name}</option>
              </select>
            </div>
          </div>
          <div className="d-flex justify-content-end mt-3">
            <div>
              <button
                className="btn btn-outline-warning"
                onClick={handleRecievedBalance}
              >
                Split Bill
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
