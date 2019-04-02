import React from "react";

class Expandable extends React.Component {

    render() {
        return(
            <div className="expandable">
                <p>Quantity: {this.props.quantity}</p>
                <p>Total Price: £{this.props.totalPrice}</p>
                <p>Delivered: {this.props.delivered.toString()}</p>
            </div>
        );
    }
}

export default Expandable;