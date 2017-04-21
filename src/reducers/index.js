import { combineReducers } from 'redux';
//import { reducerCreator } from 'redux-amrc';
//import { reducer as formReducer } from 'redux-form';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import home from '../views/HomeRedux';
import tours from '../views/ToursRedux';
import liner from '../views/LinerRedux';
import hotel from '../views/HotelRedux';
import scenicspot from '../views/ScenicSpotRedux';

import buyproduct from '../views/BuyproductRedux';

const rootReducer = combineReducers({
  home: home,
  tours:tours,
  liner:liner,
  hotel:hotel,
  scenicspot:scenicspot,
  buyproduct:buyproduct,
  routing:routerReducer,
});

export default rootReducer;











