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

	const setCurrentSeeAll = useStoreActions(
		(actions) => actions.user.setcurrentseeall
	)
	let seeallaction = async () => {
		await setCurrentSeeAll(sectioninfo)
		await history.push('/seeall')
	}

	return props.data.id ? (
		<div style={{ display: 'flex', flexDirection: 'column', margin: '0 3vw 3vh' }}>
			{!props.seeall ? (
				<div style={{marginBottom: '3vh'}}>
					<h3 style={{fontWeight: 600}}>{sectioninfo.name}</h3>
					<div
						style={{
							flex: 1,
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-between',
						}}
					>
						<p style={{margin: 0}}>{sectioninfo.description}</p>
						<h6
							style={{color: '#FF805D'}}
							onClick={() => {
								seeallaction()
							}}
						>
							Ver Todas
						</h6>
					</div>
				</div>
			) : null}

			<div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between' }}>
				{sectioninfo.products.map((item, index) => {
					if (index <= 3) {
						return (
							<div key={index} style={{ display: 'flex', width: '45vw' }}>
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
