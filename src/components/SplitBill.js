import { useState } from "react";
import { initialFriends } from "../data/Data";
import ListFriends from "./ListFriends";
import SplitBillWithFriend from "./SplitBillWithFriend";

export default function SplitBill() {
  const [friends, setFriends] = useState(initialFriends);
  const [selectFriend, setSelectFriend] = useState(null);

  function handleFriend(friend) {
    setSelectFriend(friend);
  }

  function handleSubmitBalance(friend, balance) {
    setFriends((friends) =>
      friends.map((currFrnd) =>
        currFrnd.id === friend.id
          ? { ...currFrnd, balance: balance + friend.balance }
          : currFrnd
      )
    );
    setSelectFriend(null);
  }

  function handleAddFriend(friend) {
    setFriends((currFriends) => [...currFriends, friend]);
  }

  return (
    <div className="row">
      <div className="col-md-6 me-5">
        <ListFriends
          friends={friends}
          handleFriends={handleAddFriend}
          selectHandleFriend={handleFriend}
          selectFriend={selectFriend}
        />
      </div>
      <div className="col-md-5">
        <SplitBillWithFriend
          friend={selectFriend}
          handleBalance={handleSubmitBalance}
        />
      </div>
    </div>
  );
}
