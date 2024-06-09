import { useSplitBill } from "../hooks/BillContext";
import Button from "./styles/Button";
import { TiDelete } from "react-icons/ti";

export default function Friend({ friend }) {
  const { selectFriend, selectHandleFriend, removeFriend } = useSplitBill();
  return (
    <div
      className={`border flex items-center justify-between p-3 rounded transition-colors delay-75 hover:bg-orange-300 ${
        selectFriend?.id === friend.id && "bg-orange-300"
      }`}
      style={{ width: "500px" }}
    >
      {/* Image */}
      <div className="flex gap-3">
        <img
          src={friend.image}
          alt="LOL"
          style={{ width: "70px", borderRadius: "50%" }}
        />
        <div className="flex flex-col justify-evenly">
          <p className="font-bold">{friend.name}</p>
          <p
            className={`${
              friend.balance < 0
                ? "text-red-500 italic"
                : friend.balance > 0
                ? "text-green-500 font-bold"
                : "text-black"
            }`}
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
      </div>
      <div className="flex gap-2 items-center">
        {selectFriend?.id === friend.id ? (
          <Button close onClick={() => selectHandleFriend(null)}>
            Close
          </Button>
        ) : (
          <Button onClick={() => selectHandleFriend(friend)}>Select</Button>
        )}
        <TiDelete
          className="text-4xl text-red-600 cursor-pointer transition-all hover:text-red-500 hover:scale-125"
          onClick={() => removeFriend(friend?.id)}
        />
      </div>
    </div>
  );
}
