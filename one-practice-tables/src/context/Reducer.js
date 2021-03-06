import { ADD_ITEM, REMOVE_ITEM } from "./action.types"

export default (state, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return [...state, action.payload]
        case REMOVE_ITEM:
            return state.filter(item => item.id !== action.payload)
        default:
            return state
    }
}