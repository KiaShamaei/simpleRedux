import * as extra from '../actions/ActionType';


const counterReducer = (state = 0 , action)=>{
    switch(action.type){
        case extra.INCREMENT :
            return state +=action.payload
        case extra.DECREMENT : 
        return state -1
        default : return state
    }
}

export default counterReducer;