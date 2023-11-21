import AddFriend from "./AddFriend";
import Friend from "./Friend";

export default function ListFriends({
  friends,
  handleFriends,
  selectHandleFriend,
  selectFriend,
}) {
  return (
    <>
      <div>
        {friends.length > 0 &&
          friends.map((friend) => (
            <Friend
              friend={friend}
              selectHandleFriend={selectHandleFriend}
              selectFriend={selectFriend}
              key={friend.id}
            />
          ))}
      </div>
      <div className="w-100">
        <AddFriend handleFriend={handleFriends} />
      </div>
    </>
  );
}
