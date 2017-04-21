import { combineReducers } from 'redux';

import homeproductList from '../components/Home/ToursproductlistRedux';
import linerproductList from '../components/Home/LinerproductlistRedux';
import hotelproductList from '../components/Home/HotelproductlistRedux';
import scenicspotproductList from '../components/Home/ScenicspotproductlisRedux';

export default combineReducers({
   homeproductList,
   linerproductList,
   hotelproductList,
   scenicspotproductList,
});

//export * as listActions from '../components/Home/ToursproductlistRedux';

export { loadArticles } from '../components/Home/ToursproductlistRedux';
export { loadLinerArticles } from '../components/Home/LinerproductlistRedux';
export { loadHotelArticles } from '../components/Home/HotelproductlistRedux';
export { loadScenicspotArticles } from '../components/Home/ScenicspotproductlisRedux';
 //loadArticles;