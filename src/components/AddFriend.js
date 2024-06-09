import { useState } from "react";
import { useSplitBill } from "../hooks/BillContext";
import Button from "./styles/Button";
import Input from "./styles/Input";
import InputContainer from "./styles/InputContainer";

export default function AddFriend() {
  const { handleFriends: handleFriend } = useSplitBill();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const url = "https://i.pravatar.cc/48";

  function handleSubmit() {
    const friendInfo = {
      name,
      image: url,
      balance: 0,
      id: Math.floor(100000 + Math.random() * 900000),
    };

    if (name.length === 0) return;

    handleFriend(friendInfo);

    setName("");
    setOpen(false);
  }

  console.log(name.length, name);

  return (
    <div className={open && `border p-5`}>
      {open && (
        <div>
          <InputContainer>
            <label className="form-label">Friend Name</label>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <label className="form-label">Image URL</label>
            <Input type="text" value={url} disabled />
          </InputContainer>
        </div>
      )}
      <div className="flex gap-5">
        {open && (
          <Button onClick={handleSubmit} disabled={name.length === 0}>
            Add
          </Button>
        )}
        <Button onClick={() => setOpen((val) => !val)}>
          {open ? "Close" : "Add Friend"}
        </Button>
      </div>
    </div>
  );
}
