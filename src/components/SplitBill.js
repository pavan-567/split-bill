import ListFriends from "./ListFriends";
import SplitBillWithFriend from "./SplitBillWithFriend";
import { useSplitBill } from "../hooks/BillContext";

export default function SplitBill() {
  const { selectFriend } = useSplitBill();

  return (
    <div className="row">
      <div className="col-md-6 me-5">
        <ListFriends />
      </div>
      <div className="col-md-5">
        <SplitBillWithFriend friend={selectFriend} key={selectFriend?.id} />
      </div>
    </div>
  );
}
