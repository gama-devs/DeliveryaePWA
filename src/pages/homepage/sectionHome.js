import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import HeaderHome from './headerHome'
import CarrousselBannerHome from './carrousselBannerHome'
import FooterHome from './footerHome'
import ItemSectionHome from './itemSectionHome'
import history from '../../util/history-util'

import { useStore, useStoreActions, useStoreState } from 'easy-peasy'
const SectionHome = (props) => {
	const [sectioninfo, setsectioninfo] = useState(props.data)
	useEffect(() => {
		console.log(' props.datamontoooooooooooooooou!S', sectioninfo)
	}, [])
	const setCurrentSeeAll = useStoreActions(
		(actions) => actions.user.setcurrentseeall
	)
	let seeallaction = async () => {
		await setCurrentSeeAll(sectioninfo)
		await history.push('/seeall')
	}

	return props.data.id ? (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			{!props.seeall ? (
				<div>
					<h5>{sectioninfo.name}</h5>
					<div
						style={{
							flex: 1,
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-between',
						}}
					>
						<h6>{sectioninfo.description}</h6>{' '}
						<h6
							onClick={() => {
								seeallaction()
							}}
						>
							Ver Todas
						</h6>
					</div>
				</div>
			) : null}

			<div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row' }}>
				{sectioninfo.products.map((item, index) => {
					if (index <= 3) {
						return (
							<div key={index} style={{ display: 'flex', width: '50vw' }}>
								<ItemSectionHome item={item} />
							</div>
						)
					}
				})}
			</div>
		</div>
	) : null
}

export default withRouter(SectionHome)
