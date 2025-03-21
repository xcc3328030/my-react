import * as TYPES from '../action-types'

let initial = {
    list: null
}

export default function storeReducer(state = initial, action) {
    state = JSON.stringify(JSON.parse(state))
    switch(action.type) {
        default;
    }
    return state

}