import { combineReducers } from "redux";
import products from './Products'
import cart from './Cart'
import auth from './auth'
import orders from "./orders";



export default combineReducers({ products, cart, auth, orders });