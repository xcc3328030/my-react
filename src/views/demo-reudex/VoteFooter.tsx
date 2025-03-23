import { Button } from "antd-mobile";
import { useDispatch, useSelector } from "react-redux";
import { addSupNum, addOppNum } from "@/store/features/taskSlice";

const VoteFooter = (props) => {
  const dispatch = useDispatch();
  return (
    <>
      <Button
        color="primary"
        onClick={() => {
          dispatch(addSupNum());
        }}
      >
        支持
      </Button>
      <Button
        color="primary"
        onClick={() => {
          dispatch(addOppNum());
        }}
      >
        反对
      </Button>
    </>
  );
};

export default VoteFooter;
