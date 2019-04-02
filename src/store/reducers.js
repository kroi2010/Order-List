import {SWITCH_CHECKBOX, SORT_BY, SEARCH, EXPAND_ORDER} from "../actions";

export const orderReducer = (state, action) => {
    switch(action.type){
        case SWITCH_CHECKBOX: 
            return Object.assign({}, state, {
                showOldOrders: action.filter
            })
        case SORT_BY:
            return Object.assign({}, state, {
                orderBy: action.sort
            })
        case SEARCH:
            return Object.assign({}, state, {
                search: action.text
            })
        case EXPAND_ORDER:    
            return Object.assign({}, state, {
                orders: state.orders.map((order) => {
                    if(order.id === action.id){
                        return Object.assign({}, order, {
                            expanded: !order.expanded
                        })
                    }
                    return order;
                })
            })
        default: console.log("default") 
        return state;    
    }
}
    
