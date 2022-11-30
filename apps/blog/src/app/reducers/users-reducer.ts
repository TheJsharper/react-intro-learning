import { User } from "../models/app.json-placeholder.models";
import { UserAction } from "../models/app.state";

export const userReducer = (state:User[] =[], action:UserAction)=>{

    switch(action.type ){
        case 'FETCH_USER':
            return [...state, action.payload];
        default: 
        return state;    
    }
    
}