import { combineReducers }  from 'redux';


import generateReduxr from '../components/select/selectRedux';

const  productList = generateReduxr("scenicspot");

export default combineReducers({
  productList,

});

//export * as listActions from '../components/Home/ToursproductlistRedux';

//export  loadArticles;
//export { loadArticles };

import { actionCreate } from '../components/select/selectRedux';

const loadArticles=actionCreate("scenicspot");

export { loadArticles } ;