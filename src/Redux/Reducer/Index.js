import ProductReducer from '../Reducer/productReducer'
import {combineReducers} from 'redux'

const AllReducers=combineReducers({

    ProductReducer:ProductReducer,
});
export default AllReducers;