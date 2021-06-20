
import * as extra from '../actions/ActionType'

const loggedReducer = (state= false , action)=>{
    switch(action.type){
        case extra.SIGNIN :
            return  true ;
        default: return state;
    }

}
export default loggedReducer;