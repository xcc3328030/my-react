import { connect } from 'react-redux'
import VoteFooter from './VoteFooter'
import VoteMain from './VoteMain'

const Vote = function Vote(props) {
    const { supNum, oppNum } = props
    return <>
     <h1>{ supNum + oppNum }</h1>
     <VoteMain />
     <VoteFooter />
    </>
}

export default connect(state => state.base)(Vote)