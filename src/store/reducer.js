import {SHOW_USER} from "./actions";


const initialState = {
    showName: false,
    name: "Author"
}

export function ProfileReducer(state=initialState, action){
    switch(action.type){
        case SHOW_USER:
            return {...state, showName: !state.showName}
        default: return state
    }
}
