import VoteFooter from './VoteFooter'
import VoteMain from './VoteMain'
import { useSelector } from "react-redux";

const Vote = function Vote(props) {

    const supNum = useSelector((state) => state.task.supNum);
    const oppNum = useSelector((state) => state.task.oppNum);

    return <>
     <h1>{ supNum + oppNum }</h1>
     <VoteMain />
     <VoteFooter />
    </>
}

export default Vote