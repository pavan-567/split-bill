import { useSplitBill } from "../hooks/BillContext";

export default function Friend({ friend }) {
  const { selectFriend, selectHandleFriend } = useSplitBill();
  return (
    <div
      className={`d-flex mt-3 p-2 rounded frame ${
        friend.id === selectFriend?.id ? "shadow frame-permanent" : ""
      }`}
    >
      {/* Image */}
      <img
        src={friend.image}
        alt="LOL"
        style={{ width: "70px", borderRadius: "50%" }}
      />
      <div className="flex-grow-1 mx-3 d-flex flex-column justify-content-between">
        <p className="m-0" style={{ fontSize: "20px", fontWeight: "bold" }}>
          {friend.name}
        </p>
        <p
          className="m-0 mb-2"
          style={{
            color:
              friend.balance < 0
                ? "red"
                : friend.balance > 0
                ? "green"
                : "black",
          }}
        >
          {friend.balance === 0
            ? `You and ${friend.name} Are Even`
            : friend.balance < 0
            ? `You Owe ${friend.name} ${Math.abs(friend.balance)}$`
            : `${friend.name} Owes You ${friend.balance}$`}
        </p>
      </div>
      <div className="">
        {JSON.stringify(selectFriend) === JSON.stringify(friend) ? (
          <button
            className="btn-special"
            style={{
              border: "none",
              padding: "5px 10px",
              borderRadius: "10px",
              marginTop: "5px",
            }}
            onClick={() => selectHandleFriend(null)}
          >
            Close
          </button>
        ) : (
          <button
            className="btn-special"
            style={{
              border: "none",
              padding: "5px 10px",
              borderRadius: "10px",
              marginTop: "5px",
            }}
            onClick={() => selectHandleFriend(friend)}
          >
            Select
          </button>
        )}
      </div>
    </div>
  );
}
