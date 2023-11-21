import { useState } from "react";

export default function AddFriend({ handleFriend }) {
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

  return (
    <div className="mt-3">
      {open && (
        <div className="d-flex flex-column my-3 p-3">
          <div className="mt-3">
            <label className="form-label">Friend Name</label>
            <input
              type="text"
              value={name}
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mt-3">
            <label className="form-label">Image URL</label>
            <input type="text" className="form-control" value={url} disabled />
          </div>
          <div className="mt-3 align-self-end w-25">
            <button
              className="btn btn-outline-warning"
              style={{ width: "100%" }}
              onClick={handleSubmit}
            >
              Add
            </button>
          </div>
        </div>
      )}

      <div className="d-flex justify-content-end">
        <button
          className={`btn btn-outline-danger float-right self-end ${
            open ? "me-3" : ""
          }`}
          onClick={() => setOpen((val) => !val)}
        >
          {open ? "Close" : "Add Friend"}
        </button>
      </div>
    </div>
  );
}
