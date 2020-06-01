import React from 'react'
import { Route, Router, Switch } from 'react-router-dom'

import { Layout } from '../components/layout-component'
import { Favorites } from '../pages/favorites-page'
import history from '../util/history-util'
import Home from '../pages/home-page'
import { Andrezin } from '../pages/andrezin'

/**
 * 👉 if authenticated routes are needed 👈
 *
 * import PrivateRoute from './PrivateRoute';
 *
 * const RestrictedArea = () => {
 * return (
 *  <Switch>
 *    <PrivateRoute path="/something-private" component={SomethingPrivate} />
 *  </Switch>
 * );
 *};
 **/

export const Routes = () => (
	<Router history={history}>
		<Layout>
			<Switch>
				<Route path="/favorites" component={Favorites} />
				<Route exact path="/" component={Home} />
				<Route path="/andrezinpae" component={Andrezin} />
				{/* <PrivateRoute path="/" component={() => RestrictedArea()} /> */}
			</Switch>
		</Layout>
	</Router>
)
