import * as extre from './ActionType'

export const increment = (num)=>{
    return {
        type:extre.INCREMENT ,
        payload :  num
    }
}