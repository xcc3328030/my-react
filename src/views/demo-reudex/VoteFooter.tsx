import { Button } from 'antd-mobile'

import { connect } from 'react-redux'

import action from '@/store/action'

const VoteFooter = (props) => {
    const { support, oppose } = props
    console.log(props)
    return <>
        <Button color='primary' onClick={support}>支持</Button>
        <Button color='primary' onClick={oppose}>反对</Button>
    </>
}

export default connect(null, action.base)(VoteFooter)