import React, { useEffect, useState, Fragment } from 'react'
import axios from 'axios'
import { useStore, useStoreActions, useStoreState } from 'easy-peasy'
import { Form, Field } from 'react-final-form'
import { withRouter } from 'react-router-dom'
import { Row, Col, Button, Input } from 'reactstrap'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import SearchIcon from '@material-ui/icons/Search'
import IconButton from '@material-ui/core/IconButton'
import history from '../../util/history-util'
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined'
import motoca from '../../assets/motoca.svg'
import Api from '../../services/Api'
import mulherimg from '../../assets/mulhercelular.svg'

const SearchProd = (props) => {
	const productsbase = useStoreState((state) => state.user.allproducts)

	const setallbase = useStoreActions((actions) => actions.user.setallproducts)
	const SetCurrentItem = useStoreActions(
		(actions) => actions.user.setcurrentitem
	)
	let [text, settext] = useState('')
	let [searchble, setsearchble] = useState(productsbase)
	let [prodclicked, setprodclicked] = useState([])

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
			setsearchble(results.data.data)
			setallbase(results.data.data)
		} catch (e) {
			console.log(e)
		}
		console.log()
	}
	useEffect(() => {
		loadproducts()
		console.log('logou')
	}, [])

	useEffect(() => {
		let arr = []
		productsbase.map((s) => {
			s.products.map((j) => {
				let str = j.name.split(' ').join('')
				str = str.toLowerCase()
				let searching = text.split(' ').join('')
				searching = searching.toLowerCase()
				if (str.includes(searching)) {
					arr.push(s)
				}
			})
		})
		let unique = arr.map(function(obj) {
			return JSON.stringify(obj)
		})
		unique = unique.filter(function(v, i) {
			return unique.indexOf(v) == i
		})
		let another = []
		unique.map((i) => {
			another.push(JSON.parse(i))
		})
		setsearchble(another)
	}, [text])

	let seeProductPage = async (item) => {
		await SetCurrentItem(item)
		await history.push('/product')
	}

	return (
		<div>
			<div
				style={{
					backgroundColor: '#F8F6F8',
					paddingBottom: '10vh',
					paddingTop: '5vh',
					maxWidth: '100%',
				}}
			>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						margin: '0 12px',
						justifyContent: 'space-between',
					}}
				>
					<div>
						<IconButton
							onClick={() => {
								history.push('/home')
							}}
							style={{
								display: 'flex',
								ustifyContent: 'center',
								flexDirection: 'column',
								alignItems: 'center',
								textAlign: 'center',
								backgroundColor: '#FFFF',
								borderRadius: '8px',
								height: '5.5vh',
								width: '5.5vh',
								border: 'none',
								boxShadow: '0 0 0',
							}}
						>
							<ChevronLeftIcon
								style={{
									color: '#FF805D',
									fontSize: '1.3em',
								}}
							/>
						</IconButton>
					</div>
					<div style={{ width: '85%' }}>
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								backgroundColor: '#fff',
								borderRadius: '12px',
							}}
						>
							<SearchIcon
								style={{
									marginLeft: '1vh',
									color: '#FF805D',
									fontSize: '30px',
								}}
							/>
							<Input
								onChange={async (e) => {
									console.log(searchble)
									if (e.target.value === '') {
										setsearchble(productsbase)
									}
									settext(e.target.value)
								}}
								placeholder={'Buscar itens'}
								value={text}
								style={{
									height: '5.5vh',
									border: 'none',
									borderRadius: '12px',
									fontSize: '16px',
								}}
							></Input>
						</div>
					</div>
				</div>
			</div>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					marginTop: '-5vh',
					borderRadius: '32px',
					backgroundColor: '#FFF',
				}}
			>
				{text === '' || productsbase.length === 0 ? (
					<div
						style={{
							marginTop: '10vh',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							textAlign: 'center',
						}}
					>
						<div
							style={{
								fontWeight: 'bold',
								fontSize: '15px',
								color: '#FF805D',
							}}
						>
							O que você está
							<br /> buscando para hoje?
						</div>
						<img alt="mulher com celular na mão" src={mulherimg}></img>
					</div>
				) : (
					<div style={{ marginTop: '5vh' }}>
						{searchble.map((s, index) => {
							return (
								<div
									key={index}
									style={{
										marginLeft: '2vw',
										display: 'flex',
										flexDirection: 'column',
									}}
								>
									<div
										style={{
											color: '#413131',
											display: 'flex',
											flexDirection: 'column',
											fontSize: '12px',
											fontWeight: 'bold',
											marginBottom: '2vh',
											marginTop: '1.5vh',
										}}
									>
										{s.name}
									</div>
									<div>
										{s.products.map((item, indej) => {
											return (
												<div
													onClick={async () => {
														await seeProductPage(item)
													}}
													style={{ cursor: 'pointer' }}
													key={indej}
												>
													<div
														style={{
															margin: '-1vh 0vh',
															fontSize: '15px',
															fontWeight: 'normal',
															color: '#2F2F2F',
														}}
													>
														{item.name}
													</div>
													<hr />
												</div>
											)
										})}
									</div>
								</div>
							)
						})}
					</div>
				)}
			</div>
		</div>
	)
}
export default withRouter(SearchProd)
