import React, { useEffect, useState, Fragment } from 'react'
import { useStore, useStoreActions, useStoreState } from 'easy-peasy'
import { Form, Field } from 'react-final-form'
import { withRouter } from 'react-router-dom'
import { Row, Col, Button, Input } from 'reactstrap'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import SearchIcon from '@material-ui/icons/Search'
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
		console.log('sim, eu chamei api com isso' + addresstring)
	}
	return (
		<div>
			<div
				style={{
					backgroundColor: props.success ? '#1BD09A' : '#F8F6F8',
					paddingBottom: props.success ? '10vh' : '10vh',
					maxWidth: '100%',
				}}
			>
				<Row className=" pt-4 mx-2" xs="12" sm="12" lg="12" md="12">
					<Col>
						<Button
							onClick={() => {
								history.push(props.backroute())
							}}
							style={{
								backgroundColor: '#FFFF',
								borderRadius: '8px',
								height: '7vh',
								width: '7vh',
							}}
						>
							<ArrowBackIosIcon style={{ color: '#FF805D' }} />
						</Button>
					</Col>
					<Col xs="10">
						{!props.success ? (
							<Fragment>
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
										let cp = fulluser.address
										cp.str = e.target.value
										setaddresbase(cp)
									}}
									value={fulluser.address.str}
									style={{
										height: '7vh',
										borderRadius: '8px',
									}}
								></Input>
							</Fragment>
						) : null}
					</Col>
				</Row>
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