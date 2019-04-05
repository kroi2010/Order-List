import React from "react";
import Search from "./Search";
import OrderBy from "./OrderBy";
import Order from "./Order";
import {SORT_BY, showOlderOrders} from "../actions";
import{bindActionCreators} from "redux";
import {connect} from "react-redux";

class App extends React.Component {

    render () {
        return(
            <div className="app">
                <div className="left">
                    <Search/>
                    <OrderBy/>
                    <div className="checkbox_area">
                        <label><input type="checkbox" onChange={e => this.props.handleCheckboxChange(e.target.checked)} checked={this.props.showOldOrders}/>Show orders older than a month</label>
                    </div>
                    <textarea className="address" value={this.props.address}/>
                </div>
                <div className="center">
                <div className="order_area">
                    {this.props.orders.sort((a,b) => {
                        switch(this.props.sortBy){
                            case SORT_BY.DATE_DESC:  return new Date(b.order_date) - new Date(a.order_date);
                            case SORT_BY.DATE_ASC:   return new Date(a.order_date) - new Date(b.order_date);
                            case SORT_BY.PRICE_DESC: return new Date(b.total_price) - new Date(a.total_price);
                            case SORT_BY.PRICE_ASC:  return new Date(a.total_price) - new Date(b.total_price);
                            default: return new Date(a.order_date) - new Date(b.order_date);
                        }
                    }).filter(orderDetail => {
                        const currentDate = new Date();
                        const monthAgo = currentDate.setMonth(currentDate.getMonth() - 1);
                        return this.props.showOldOrders ? orderDetail : new Date(orderDetail.order_date) > monthAgo;
                    }).filter(orderDetail => {
                        console.log(orderDetail.name," includes ",this.props.search," : ",orderDetail.name.toLowerCase().includes(this.props.search))
                        return this.props.search === "" ? orderDetail : (orderDetail.name.toLowerCase().includes(this.props.search.toLowerCase()) || orderDetail.code.toLowerCase().includes(this.props.search.toLowerCase()))
                    }).map(orderDetail =>{
                        return <Order id={orderDetail.id} expanded={orderDetail.expanded} name={orderDetail.name} code={orderDetail.code} address={orderDetail.delivery_address} quantity={orderDetail.quantity} totalPrice={orderDetail.total_price} delivered={orderDetail.delivered}/>
                    })}
                </div>
                
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
  orders: state.orders,
  showOldOrders: state.showOldOrders,
  sortBy: state.orderBy,
  address: state.address,
  search: state.search
})

const matchDispatchToProps = (dispatch) => bindActionCreators({handleCheckboxChange: showOlderOrders}, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(App);
