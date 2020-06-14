import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import HeaderHome from './headerHome'
import CarrousselBannerHome from './carrousselBannerHome'
import SectionHome from './sectionHome'
import pizzalogo from '../../assets/logo.png'
import SearchIcon from '@material-ui/icons/Search'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline'
import Api from '../../services/Api'
import history from '../../util/history-util'
import { Button } from 'reactstrap'
import FooterHome from './footerHome'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import { useStore, useStoreActions, useStoreState } from 'easy-peasy'

const seeAllHome = (props) => {
	const Pageitem = useStoreState((state) => {
		return state.user.currentseeall
	})

	useEffect(() => {
		!Pageitem.id && history.push('/home')
	}, [])
	return (
		<div>
			<div
				style={{
					backgroundColor: '#E5E5E5',
					display: 'flex',
					alignItems: 'center',
					height: '20vh',
					paddingBottom: '5vh',
				}}
			>
				<Button
					onClick={() => {
						history.push('/home')
					}}
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						textAlign: 'center',
						borderStyle: 'none',
						boxShadow: '0 0 0',
						backgroundColor: '#FFF',
						borderRadius: '12px',
						marginLeft: '3vh',
						height: '5vh',
						width: '5vh',
					}}
				>
					<ChevronLeftIcon
						style={{ color: '#FF805D', height: '3vh', width: 'auto' }}
					/>
				</Button>
				<div
					style={{
						textAlign: 'center',
						fontSize: '20px',
						fontWeight: 'bold',
						color: '#FF805D',
						padding: '5vh 0',
						flex: '1',
						marginRight: '8vh',
					}}
				>
					{Pageitem.name}
				</div>
			</div>
			<SectionHome data={Pageitem} seeall />

			<FooterHome />
		</div>
	)
}

export default withRouter(seeAllHome)
