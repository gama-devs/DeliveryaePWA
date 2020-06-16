import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import HeaderHome from './headerHome'
import CarrousselBannerHome from './carrousselBannerHome'
import SectionHome from './sectionHome'
import FooterHome from './footerHome'
import { useStore, useStoreActions, useStoreState } from 'easy-peasy'
import pizzalogo from '../../assets/logo.png'
import SearchIcon from '@material-ui/icons/Search'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline'
import Api from '../../services/Api'
import { Button } from 'reactstrap'
import history from '../../util/history-util'
const ItemSectionHome = (props) => {
	const [iteminfo, setiteminfo] = useState(props.item)

	const SetCurrentItem = useStoreActions(
		(actions) => actions.user.setcurrentitem
	)

	let seeProductPage = async () => {
		await SetCurrentItem(iteminfo)
		await history.push('/product')
	}

	return (
		<div
			onClick={() => {
				console.log(iteminfo)
				seeProductPage()
			}}
			style={{
				flex: 1,
				display: 'flex',
				flexDirection: 'column',
				backgroundColor: '#FFFFFF',
				marginBottom: '3vh'
			}}
		>
			<img 
				src={'http://50.16.146.1/storage/' + iteminfo.image}
				style={{
					width: '100%',
					height:'15vh',
					objectFit:'cover',
					borderRadius: '12px 12px 0 0',
				}} />
			<div style={{
				border: '2px solid #F1F1F1',
				borderRadius: '0 0 12px 12px',
				height: '15vh',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between'
			}}>
				<span className="ml-1" style={{ fontSize: '1.25em', color: '#FF805D', fontWeight: 600 }}>
					{iteminfo.name}
				</span>
				<div className="ml-1" style={{ fontSize: '13px' }}>
					{iteminfo.description}
				</div>
				<div className="ml-1" style={{ fontSize: '1.25em', fontWeight: 600 }}>
					{'R$' + iteminfo.price / 100}
				</div>
			</div>
		</div>
	)
}

export default withRouter(ItemSectionHome)
