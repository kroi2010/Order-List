import React from "react";
import Expandable from "./Expandable";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {expandOrders} from "../actions"

class Order extends React.Component {

    render() {
        console.log("rerender",this.props.expanded)
        return(
            <div className="order" onClick={() => this.props.expandOrders(this.props.id)}>
                <p>
                    <span className="name">{this.props.name}</span>
                    <span className="code">{this.props.code}</span>
                </p>
                {this.props.expanded ? <Expandable quantity={this.props.quantity} totalPrice={this.props.totalPrice} delivered={this.props.delivered}/> : ""}
                <p className="address">Delivery Address: {this.props.address}</p>
            </div>
        );
    }
}

const matchDispatchToProps = (dispatch) => bindActionCreators({expandOrders: expandOrders}, dispatch);

export default connect(null, matchDispatchToProps)(Order);