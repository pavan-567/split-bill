import { createContext, useContext, useState } from "react";
import { initialFriends } from "../data/Data";

const BillContext = createContext();

function BillProvider({ children }) {
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
    <BillContext.Provider
      value={{
        friends,
        handleFriends: handleAddFriend,
        selectHandleFriend: handleFriend,
        selectFriend,
        handleBalance: handleSubmitBalance,
      }}
    >
      {children}
    </BillContext.Provider>
  );
}

function useSplitBill() {
  const context = useContext(BillContext);
  return context;
}

export { BillProvider, useSplitBill };
