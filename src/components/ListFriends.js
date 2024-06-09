import { useSplitBill } from "../hooks/BillContext";
import AddFriend from "./AddFriend";
import Friend from "./Friend";

export default function ListFriends() {
  const { friends } = useSplitBill();

  return (
    <div className="">
      <div className="flex flex-col gap-5 mx-5 px-5 py-2">
        {friends.length > 0 &&
          friends.map((friend) => <Friend friend={friend} key={friend.id} />)}
        <AddFriend />
      </div>
    </div>
  );
}
