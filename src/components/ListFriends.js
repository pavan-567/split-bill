import { useSplitBill } from "../hooks/BillContext";
import AddFriend from "./AddFriend";
import Friend from "./Friend";

export default function ListFriends() {
  const { friends } = useSplitBill();

  return (
    <>
      <div className="p-3">
        {friends.length > 0 &&
          friends.map((friend) => <Friend friend={friend} key={friend.id} />)}
      </div>
      <div className="w-100">
        <AddFriend />
      </div>
    </>
  );
}
