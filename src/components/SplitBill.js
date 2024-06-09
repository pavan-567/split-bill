import ListFriends from "./ListFriends";
import SplitBillWithFriend from "./SplitBillWithFriend";
import { useSplitBill } from "../hooks/BillContext";
import Container from "./styles/Container";
import Header from "./Header";

export default function SplitBill() {
  const { selectFriend } = useSplitBill();

  return (
    <Container>
      <div className="flex flex-col justify-center items-center gap-5">
        <Header />
        <div className="flex justify-center gap-10 grow self-center min-h-[550px]">
          <ListFriends />
          <SplitBillWithFriend friend={selectFriend} key={selectFriend?.id} />
        </div>
      </div>
    </Container>
  );
}
