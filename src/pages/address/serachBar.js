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

const SearchBar = (props) => {
	const fulluser = useStoreState((state) => state.user)
	const setaddresbase = useStoreActions((actions) => actions.user.setaddress)
	let [text, settext] = useState(fulluser.address.str)
	const [selected, setselected] = useState('')
	useEffect(() => {
		let tpmfunc = async () => {
			console.log('o totalmudou')
			await loadAdresses(fulluser.address.str)
		}
		tpmfunc()
	}, [fulluser.address.str])

	const loadAdresses = async (addresstring) => {
		if (addresstring !== '') {
			console.log('sim, eu chamei api com isso' + addresstring)

			let resp = await axios.get(
				`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURI(
					addresstring
				)}.json?bbox=-73,-33,-34.0,5.5&access_token=pk.eyJ1IjoiZGVsaXZlcnlhZSIsImEiOiJja2F3eHlnZ2IwMDB3MnBudzV3OGx3eDA5In0.42k6GoeW3xZIySLKeBx22Q `
			)
			console.log('###################################')
			let arr = []
			resp.data.features.map((s) => {
				arr.push({
					description: ' ',
					str: addresstring,
					fullresp: s.place_name,
					numero: '',
					complement: 'Apto 1',
					lat: s.center[0],
					long: s.center[1],
					zip_code: s.context ? s.context[0].text : '',
					address: 'completo',
					fullobj: s,
				})
			})
			props.setloadeds(arr)
			// console.log(
			// 	navigator.geolocation.getCurrentPosition((isso) => {
			// 		console.log(isso)
			// 	})
			// )
		}
	}
	return (
		<div>
			<div
				style={{
					backgroundColor: props.success ? '#1BD09A' : '#F8F6F8',
					paddingBottom: props.success ? '10vh' : '10vh',
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
								props.backroute()
							}}
							style={{
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
						{!props.success ? (
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
										settext(e.target.value)
										if (e.target.value === '') {
											console.log('emptystring!')
											props.setloadeds([])
										}
										let cp = fulluser.address
										cp.str = e.target.value
										setaddresbase(cp)
									}}
									value={fulluser.address.str}
									style={{
										height: '5.5vh',
										border: 'none',
										borderRadius: '12px',
									}}
								></Input>
							</div>
						) : null}
					</div>
				</div>
				{props.success ? (
					<Row
						style={{
							display: 'flex',
							justifyContent: 'center',
							flexDirection: 'column',
							alignItems: 'center',
						}}
					>
						<div
							className="my-1"
							style={{
								borderRadius: '12px',
								height: '8vh',
								width: '8vh',
								backgroundColor: '#FFF',
							}}
						>
							<img
								style={{ marginLeft: '2vw', marginTop: '1vh' }}
								src={motoca}
							></img>
						</div>
						<h3 style={{ fontSize: '15px', fontWeight: 'bold', color: '#fff' }}>
							Maravilha!
						</h3>
						<h3 style={{ fontSize: '15px', fontWeight: 'bold', color: '#fff' }}>
							Nós atendemos sua região.
						</h3>
					</Row>
				) : null}
			</div>
		</div>
	)
}
export default SearchBar
