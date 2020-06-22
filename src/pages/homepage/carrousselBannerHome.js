import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import HeaderHome from './headerHome'
import SectionHome from './sectionHome'
import FooterHome from './footerHome'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import pizzalogo from '../../assets/logo.png'
import SearchIcon from '@material-ui/icons/Search'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline'
import Api from '../../services/Api'
import imgbg from '../../assets/bannercarousel.png'
import { withKnobs, boolean, number } from '@storybook/addon-knobs'
import { BrowserView, MobileView } from 'react-device-detect'
const CarrousselBannerHome = (props) => {
	const getConfigurableProps = () => ({
		showArrows: boolean('showArrows', true, tooglesGroupId),
		showStatus: boolean('showStatus', true, tooglesGroupId),
		showIndicators: boolean('showIndicators', true, tooglesGroupId),
		infiniteLoop: boolean('infiniteLoop', true, tooglesGroupId),
		showThumbs: boolean('showThumbs', true, tooglesGroupId),
		useKeyboardArrows: boolean('useKeyboardArrows', true, tooglesGroupId),
		autoPlay: boolean('autoPlay', true, tooglesGroupId),
		stopOnHover: boolean('stopOnHover', true, tooglesGroupId),
		swipeable: boolean('swipeable', true, tooglesGroupId),
		dynamiborderRadius: '20px',
		cHeight: boolean('dynamicHeight', true, tooglesGroupId),
		emulateTouch: boolean('emulateTouch', true, tooglesGroupId),
		thumbWidth: number('thumbWidth', 100, {}, valuesGroupId),
		selectedItem: number('selectedItem', 0, {}, valuesGroupId),
		interval: number('interval', 3000, {}, valuesGroupId),
		transitionTime: number('transitionTime', 150, {}, valuesGroupId),
		swipeScrollTolerance: number('swipeScrollTolerance', 5, {}, valuesGroupId),
	})
	const mainGroupId = 'Main'
	const tooglesGroupId = 'Toggles'
	const valuesGroupId = 'Values'
	return (
		<div>
			<MobileView>
				{' '}
				<div style={{ display: 'flex', borderRadius: '20px', height: '20vh' }}>
					<style></style>
					<Carousel
						centerSlidePercentage={20}
						transitionTime={2000}
						autoPlay
						showArrows={false}
						backgroundColor="#FFF"
						color="#FFF"
						infiniteLoop
						showStatus={false}
						renderIndicator={false}
						showThumbs={false}
					>
						<div
							style={{
								alignItems: 'center',
								justifyContent: 'center',
								borderRadius: '20px',
								height: '19vh',
								width: '100vw',
							}}
						>
							<img
								style={{ borderRadius: '20px', height: '18vh', width: '80vw' }}
								alt=""
								src={imgbg}
							/>
						</div>
						<div
							style={{
								alignItems: 'center',
								justifyContent: 'center',
								borderRadius: '20px',
								height: '19vh',
								width: '100vw',
							}}
						>
							<img
								style={{ borderRadius: '20px', height: '18vh', width: '80vw' }}
								alt=""
								src={imgbg}
							/>
						</div>
						<div
							style={{
								alignItems: 'center',
								justifyContent: 'center',
								borderRadius: '20px',
								height: '19vh',
								width: '100vw',
							}}
						>
							<img
								style={{ borderRadius: '20px', height: '18vh', width: '80vw' }}
								alt=""
								src={imgbg}
							/>
						</div>
						<div
							style={{
								alignItems: 'center',
								justifyContent: 'center',
								borderRadius: '20px',
								height: '19vh',
								width: '100vw',
							}}
						>
							<img
								style={{ borderRadius: '20px', height: '18vh', width: '80vw' }}
								alt=""
								src={imgbg}
							/>
						</div>
					</Carousel>
				</div>
			</MobileView>
			<BrowserView>
				<div style={{ width: '60vw', borderRadius: '20px', height: '25vh' }}>
					<Carousel
						centerSlidePercentage={20}
						transitionTime={2000}
						autoPlay
						showArrows={false}
						backgroundColor="#FFF"
						color="#FFF"
						infiniteLoop
						showStatus={false}
						renderIndicator={false}
						showThumbs={false}
					>
						<div
							style={{
								alignItems: 'center',
								justifyContent: 'center',
								borderRadius: '20px',
								height: '23vh',
								width: '60vw',
								marginTop: '1vh',
							}}
						>
							<img
								style={{ borderRadius: '20px', height: '23vh', width: '40vw' }}
								alt=""
								src={imgbg}
							/>
						</div>
						<div
							style={{
								alignItems: 'center',
								justifyContent: 'center',
								borderRadius: '20px',
								height: '23vh',
								width: '60vw',
							}}
						>
							<img
								style={{ borderRadius: '20px', height: '23vh', width: '40vw' }}
								alt=""
								src={imgbg}
							/>
						</div>
						<div
							style={{
								alignItems: 'center',
								justifyContent: 'center',
								borderRadius: '20px',
								height: '23vh',
								width: '60vw',
							}}
						>
							<img
								style={{ borderRadius: '20px', height: '23vh', width: '40vw' }}
								alt=""
								src={imgbg}
							/>
						</div>
						<div
							style={{
								alignItems: 'center',
								justifyContent: 'center',
								borderRadius: '20px',
								height: '23vh',
								width: '60vw',
							}}
						>
							<img
								style={{ borderRadius: '20px', height: '23vh', width: '40vw' }}
								alt=""
								src={imgbg}
							/>
						</div>
					</Carousel>
				</div>
			</BrowserView>
		</div>
	)
}

export default withRouter(CarrousselBannerHome)
