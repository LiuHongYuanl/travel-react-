import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Home from './views/Home';
import Tours from './views/Tours';
import Liner from './views/Liner';
import Hotel from './views/Hotel';
import Buyproduct from './views/Buyproduct';
import ScenicSpot from './views/ScenicSpot';
import Login from './views/Login';
import Register from './views/Register';
import NotFound from './views/NotFound';
import Frame from './layouts/Frame';

export default () => {
   return (
	  <Route path="/">
        <Route component={Frame}>
	      <IndexRoute component={Home} />
	      <Route path="tours" component={Tours} />
	      <Route path="liner" component={Liner} />
	      <Route path="hotel" component={Hotel} />
	      <Route path="scenicspot" component={ScenicSpot} />
	      <Route path="buyproduct" component={Buyproduct} />
	    </Route>
	    <Route path="login" component={Login} />
	    <Route path="register" component={Register} />
	    <Route path="*" component={NotFound} status={404}/>
      </Route>   
   );
}
