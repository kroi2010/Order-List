import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";
import "./styling/base.css"
import {createStore} from "redux";
import OrderData from "./data/orders.json"
import {orderReducer} from "./store/reducers";
import {Provider} from "react-redux"

const store = createStore(orderReducer, OrderData);

store.subscribe(() => console.log("updated",store.getState()))

ReactDom.render(
    <Provider store={store}><App/></Provider>,document.getElementById("root")
)