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
				borderStyle: 'solid',
				borderColor: '#000',
				backgroundColor: '#EE22',
				height: '30vh',
				borderRadius: '20px',
			}}
		>
			<div className="ml-1" style={{ flex: 1 }}>
				'IMAGEM AQUI MEU BOM'
			</div>
			<div className="ml-1" style={{ fontSize: '13px', color: '#FF805D' }}>
				{iteminfo.name}
			</div>
			<div className="ml-1" style={{ fontSize: '13px' }}>
				{iteminfo.description}
			</div>
			<div className="ml-1" style={{ fontSize: '13px' }}>
				{'R$' + iteminfo.price / 100}
			</div>
		</div>
	)
}

export default withRouter(ItemSectionHome)
