import React from "react";
import {connect} from "react-redux";
import{bindActionCreators} from "redux";
import {sortOrders, SORT_BY} from "../actions";

class OrderBy extends React.Component{
    render() {
        return (
            <select onChange={event => this.props.sortOrders(event.target.value)}>
                <option value={SORT_BY.DATE_DESC}>Sort by order date (descending)</option>
                <option value={SORT_BY.DATE_ASC}>Sort by order date (ascending)</option>
                <option value={SORT_BY.PRICE_DESC}>Sort by total price (descending)</option>
                <option value={SORT_BY.PRICE_ASC}>Sort by total price (ascending)</option>
            </select>
        );
    }
}

const matchDispatchToProps = (dispatch) => bindActionCreators({sortOrders: sortOrders}, dispatch);

export default connect(null, matchDispatchToProps)(OrderBy);