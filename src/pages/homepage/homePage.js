import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import HeaderHome from './headerHome'
import CarrousselBannerHome from './carrousselBannerHome'
import SectionHome from './sectionHome'
import FooterHome from './footerHome'
import ItemSectionHome from './itemSectionHome'
import pizzalogo from '../../assets/logo.png'
import SearchIcon from '@material-ui/icons/Search'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline'
import Api from '../../services/Api'
import { Button } from 'reactstrap'
import { useStore, useStoreActions, useStoreState } from 'easy-peasy'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

const HomePage = () => {
	const fulluser = useStoreState((state) => {
		return state.user
	})
	const seeAllitem = useStoreState((state) => {
		return state.user.currentseeall
	})

	const setaddresbase = useStoreActions((actions) => actions.user.setaddress)

	const [allproducts, setallproducts] = useState([])
	const [loadingpage, setloading] = useState(true)
	let loadproducts = async () => {
		try {
			const results = await Api.get('products?company_id=2', {
				headers: {
					'content-type': 'application/json',
					Accept: 'application/json',
					// Authorization:
					// 	'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZTA0NzI0NWQ2ZDJmNTJjYTZkNjk0NWNhMDQ4MTQ3NGQ2OWUxNjU0NTcyZWFhMDEyZjliYTQ4NjM3Zjg4MmE4YzQ0MDNmZDMxM2Q3NjgyMTMiLCJpYXQiOjE1OTE4MjUxOTAsIm5iZiI6MTU5MTgyNTE5MCwiZXhwIjoxNjIzMzYxMTkwLCJzdWIiOiIxMyIsInNjb3BlcyI6W119.n_wbysZL8wjuDGD3Dly4cg3JB1pepPmJ2hiNyXSHKni7YEWT2kfp16Np-pbiU1PMQFka5R0bYo6U07jOV_BPjq-RsyB74FJlaX6pY3XWWHIVAGhfs7udbCRLLQELicD4QVURD-SCHOld0ditr2sznJmTEgQ7_uIpMm-64n9__SuU0FwXFHOuyY1lEmVNpZulcEiIrEp7-XmftsRVcjEER25UCzfkaWawTgOXl0UhbT8_fFOxo5523b1lnf2kumyfGfw69WLQTsMzcRDmia7rsAXtABgT2Kw-L_cwOSAvIuQfz6xginfiGtnGTSRVo-KJDGiJ_0CvHc1ndI6oou-I_KdPQndIVCV5pkCv_7Nj1GT6BOdc4yk8ZtEH9PhW7jOeKmKjWQsiH_KnirdZzFwNxx3iKelyg2rse66osrK-d1QrvMjz3P7bLYk9Olz7RHLde6CMiJAiaNQ6TU1zcCY_ZYJrIowbI71rXAUTuz7WAebNwAUqLwo7LTgaxAYNDcJQZAW48UWFuQ9J2KEuPs_gu0BARvLD_9VhJxC0TKKqjTO-aY2OWCNRdzIMxnW4kZSp-fXQNA_evE4TaYhuQ2o5_yZxlZSNY_mGzsOgpaLoETMy6yUaWM2xs7RV5NCsg7krr4xHCsRKWK6Vdqq0-GFPjFKFbfsoPzrJL_nFtJo_-9w',
				},
			})

			console.log(results.data.data)
			await setallproducts(results.data.data)
			await setloading(false)
		} catch (e) {
			console.log(e)
		}
		console.log()
	}
	useEffect(() => {
		loadproducts()
	}, [])
	return (
		<div>
			<HeaderHome />

			{loadingpage ? (
				<div className="ml-4">
					<SkeletonTheme color="#F4F4F4" highlightColor="#444">
						<Skeleton count={1} height={'20vh'} width={'60vw'} />
						<Skeleton count={1} height={17} width={'50vw'} />
						<br />
						<Skeleton count={1} height={17} width={'30vw'} />
						<br />
						<Skeleton count={1} height={'20vh'} width={'60vw'} />
						<Skeleton count={1} height={17} width={'50vw'} />
						<br />
						<Skeleton count={1} height={17} width={'30vw'} />
						<br />
						<Skeleton count={1} height={'20vh'} width={'60vw'} />
						<Skeleton count={1} height={17} width={'50vw'} />
						<br />
						<Skeleton count={1} height={17} width={'30vw'} />
					</SkeletonTheme>
				</div>
			) : (
				<div>
					<div style={{ display: 'flex', flexDirection: 'column' }}>
						<div
							onClick={() => {
								console.log(fulluser)
							}}
							style={{ flex: 1 }}
						>
							<CarrousselBannerHome />
						</div>
						{allproducts.map((item, index) => {
							return (
								<div key={index} style={{ flex: 1 }}>
									<SectionHome data={item} />
								</div>
							)
						})}
					</div>
				</div>
			)}
			<div style={{ flex: 1 }}>
				<FooterHome />
			</div>
		</div>
	)
}

export default withRouter(HomePage)
