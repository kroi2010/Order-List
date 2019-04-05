/*
 * action types
 */
  export const SWITCH_CHECKBOX = "SWITCH_CHECKBOX"
  export const SEARCH = "SEARCH"
  export const EXPAND_ORDER = "EXPAND_ORDER"
  
/*
 * other constants
 */
  export const SORT_BY ={
    DATE_DESC: "DATE_DESC",
    DATE_ASC: "DATE_ASC",
    PRICE_DESC: "PRICE_DESC",
    PRICE_ASC: "PRICE_ASC"
  } 

/*
 * action creators
 */

export const showOlderOrders = filter => ({
  type: SWITCH_CHECKBOX,
  filter
})

 export const sortOrders = (sort) => ({type: SORT_BY, sort})

 export const searchOrders = (text) => ({type: SEARCH, text})

 export const expandOrders = (id) => ({type: EXPAND_ORDER, id})
