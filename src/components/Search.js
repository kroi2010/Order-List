import React from "react";
import {connect} from "react-redux";
import{bindActionCreators} from "redux";
import{searchOrders} from "../actions"

class Search extends React.Component {

    render() {
        return(
            <div className="search_container"> 
                <input placeholder="Look for..."  onKeyUp={e => this.props.searchOrders(e.target.value)}/>
                <button className="search_button">Search</button>
            </div>
        );
    }
}

const matchDispatchToProps = (dispatch) => bindActionCreators({searchOrders: searchOrders}, dispatch);

export default connect(null, matchDispatchToProps)(Search);