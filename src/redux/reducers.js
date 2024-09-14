import { combineReducers } from 'redux';
import defaultReducer from "./default/defaultReducer";
import productReducer from "./product/productReducer";
import formReducer from "./form/formReducer";
import dictionaryReducer from './dictionary/dictionaryReducer';
const rootReducer = combineReducers({
    default: defaultReducer,
    product: productReducer,
    form: formReducer,
    dictionary: dictionaryReducer,
});

export default rootReducer;