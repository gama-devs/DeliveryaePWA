import React, { useEffect, useState } from 'react'
import { useStore, useAction } from 'easy-peasy'
import { Form, Field } from 'react-final-form'
import { withRouter } from 'react-router-dom'
import { Row, Col, Button, Input } from 'reactstrap'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import SearchIcon from '@material-ui/icons/Search'
import history from '../../util/history-util'
import LoadedAddresses from './loadedAddresses'
const searchAddress = () => {
	const fulluser = useStore((state) => state.user)
	let [text, settext] = useState(fulluser.address)
	let [lodaded, setloaded] = useState([
		{
			stt: fulluser.address,
			name: 'Rua meu amigo',
			cep: '71100077',
			lat: '-48',
			long: '34',
		},
	])
	useEffect(() => {
		console.log(fulluser)
	}, [])

	return (
		<div>
			<div
				style={{
					backgroundColor: '#F8F6F8',
					paddingBottom: '10vh',
					maxWidth: '100%',
				}}
			>
				<Row className=" pt-5 mx-2" xs="12" sm="12" lg="12" md="12">
					<Col>
						<Button
							onClick={() => {
								history.push('/checkaddres')
							}}
							style={{
								backgroundColor: '#FFFF',
								borderRadius: '8px',
								height: '7vh',
								width: '7vh',
							}}
						>
							{' '}
							<ArrowBackIosIcon style={{ color: '#FF805D' }} />
						</Button>
					</Col>
					<Col xs="10">
						<SearchIcon
							style={{
								marginTop: '2vh',
								marginLeft: '1vh',
								color: '#FF805D',
								fontSize: '30px',
								position: 'absolute',
							}}
						/>
						<Input
							onChange={(e) => {
								settext(e.target.value)
							}}
							value={text}
							style={{ height: '7vh', borderRadius: '8px' }}
						></Input>
					</Col>
				</Row>
			</div>
			<div
				style={{
					backgroundColor: '#ffff',
					borderRadius: '32px',
					marginTop: '-5vh',
					height: '90vh',
				}}
			>
				<Row>
					<Col>
						<LoadedAddresses loadeds={lodaded}></LoadedAddresses>
						<LoadedAddresses loadeds={lodaded}></LoadedAddresses>
						<LoadedAddresses loadeds={lodaded}></LoadedAddresses>
						<LoadedAddresses loadeds={lodaded}></LoadedAddresses>
						<LoadedAddresses loadeds={lodaded}></LoadedAddresses>

						{JSON.stringify(fulluser.address)}
					</Col>
				</Row>
			</div>
		</div>
	)
}

export default withRouter(searchAddress)
