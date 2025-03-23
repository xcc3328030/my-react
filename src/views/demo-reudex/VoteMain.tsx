import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllTaskAsync } from "@/store/features/taskSlice";

const VoteMain = function VoteMain(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTaskAsync());
  }, []);

  const supNum = useSelector((state) => state.task.supNum);
  const oppNum = useSelector((state) => state.task.oppNum);
  return (
    <div>
      <p>支持人数：{supNum}</p>
      <p>反对人数：{oppNum}</p>
    </div>
  );
};

export default VoteMain;
