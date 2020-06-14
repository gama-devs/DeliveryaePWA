import React from 'react'
import { Route, Router, Switch } from 'react-router-dom'

import { Layout } from '../components/layout-component'
import { Favorites } from '../pages/favorites-page'
import history from '../util/history-util'
import Home from '../pages/home-page'
import Onboarding from '../pages/andrezin'
import checkAddress from '../pages/address/checkAddress'
import searchAddress from '../pages/address/searchAddress'
import HomePage from '../pages/homepage/homePage'
import LoginPage from '../pages/login/loginPage'
import ProfilePage from '../pages/profile/profilePage'
import seeAllHome from '../pages/homepage/seeAllHome'
import itemChoosingHome from '../pages/homepage/itemChoosingHome'

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
				<Route exact path="/" component={checkAddress} />
				<Route path="/checkaddres" component={checkAddress} />
				<Route path="/searchaddres" component={searchAddress} />
				<Route path="/home" component={HomePage} />
				<Route path="/login" component={LoginPage} />
				<Route path="/profile" component={ProfilePage} />
				<Route path="/seeall" component={seeAllHome} />
				<Route path="/product" component={itemChoosingHome} />
				{/* <PrivateRoute path="/" component={() => RestrictedArea()} /> */}
			</Switch>
		</Layout>
	</Router>
)
