import { combineReducers }  from 'redux';


import generateReduxr from '../components/select/selectRedux';

const  productList = generateReduxr("hotel");

export default combineReducers({
  productList,

});

//export * as listActions from '../components/Home/ToursproductlistRedux';

//export  loadArticles;
//export { loadArticles };

import { actionCreate } from '../components/select/selectRedux';

const loadArticles=actionCreate("hotel");

export { loadArticles } ;