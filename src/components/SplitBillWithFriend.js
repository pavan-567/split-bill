import { useState } from "react";
import { useSplitBill } from "../hooks/BillContext";
import Button from "./styles/Button";
import Input from "./styles/Input";
import InputContainer from "./styles/InputContainer";

export default function SplitBillWithFriend({ friend }) {
  const { handleBalance } = useSplitBill();
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
    <div className="w-[500px] mt-2 rounded">
      {friend && (
        <div className="h-full flex flex-col w-[600px]">
          <div className="border px-10 py-5 space-y-8">
            <div className="text-center">
              <div className="text-3xl">Split a Bill With {friend.name}</div>
            </div>
            <InputContainer>
              <label className="col-form-label">Bill Value</label>

              <Input
                type="number"
                value={bill}
                onChange={(e) => setBill(e.target.value)}
              />
            </InputContainer>
            <InputContainer>
              <label>Your Expense</label>
              <Input
                type="number"
                value={expense}
                onChange={(e) => {
                  if (
                    Number(e.target.value) <= Number(bill) &&
                    e.target.value.length <= bill.length
                  )
                    setExpense(e.target.value);
                }}
              />
            </InputContainer>
            <InputContainer>
              <label>{friend.name} Expense</label>

              <Input type="number" value={bill - expense} disabled />
            </InputContainer>
            <InputContainer>
              <label>Who's Paying The Bill?</label>
              <select
                className="border px-3 py-1"
                value={payBill}
                onChange={(e) => setPayBill(e.target.value)}
              >
                <option value="you">You</option>
                <option value={friend.name}>{friend.name}</option>
              </select>
            </InputContainer>
            <div>
              <Button
                onClick={handleRecievedBalance}
                disabled={bill.length <= 0 || expense.length <= 0}
              >
                Split Bill
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
