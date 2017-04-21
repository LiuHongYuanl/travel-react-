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
/*import { Main, Home, Counter, NotFound, Forms, Statistic, Login } from './containers';
import { loadCounter } from './actions/counter';
import { loadStatistic } from './actions/statistic';
import { loadAuthIfNeeded } from './actions/auth';

const preload = promise => (nextState, replace, cb) => {
  if (__SERVER__ || nextState.location.action === 'PUSH') {
    promise().then(() => cb());
  } else {
    cb();
  }
};

export default store => {
 const counterPromise = () => store.dispatch(loadCounter());
  const statisticPromise = () => store.dispatch(loadStatistic());
  const authPromise = () => store.dispatch(loadAuthIfNeeded());
  const requireLogin = (nextState, replace, cb) => {
    const user = store.getState().async.user;
    if (!user) {
      replace('/');
    }
    cb();
  };

  return (
    <Route path="/" component={Main} onEnter={preload(authPromise)}>
      <IndexRoute component={Home}/>
      <Route onEnter={requireLogin}>
        <Route path="counter" component={Counter} onEnter={preload(counterPromise)}/>
        <Route path="forms" component={Forms}/>
        <Route path="statistic" component={Statistic} onEnter={preload(statisticPromise)}/>
      </Route>>
      <Route path="login" component={Login}/>
      <Route path="*" component={NotFound} status={404}/>
    </Route>
  );
};
*/